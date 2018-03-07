import React, { Component } from 'react'
import axios from 'axios'
import agent from '../agent'

class FileUpload extends Component {
  constructor(...args) {
    super(...args)
    this.onClick = this.onClick.bind(this)
  }

  open = () => {
    this.fileInputEl.value = null
    this.fileInputEl.click()
  }

  onDrop = ev => {
    const { pictureNb, onEnding } = this.props
    ev.preventDefault()
    const fileList = ev.target.files[0] || []

    const formData = new FormData()
    formData.append('files', fileList)
    formData.append('nb', pictureNb)

    onEnding(formData, pictureNb)
    // agent.Img.add(formData, pictureNb)
  }

  onClick = ev => {
    const { onClick, disableClick } = this.props
    if (!disableClick) {
      ev.stopPropagation()

      if (onClick) {
        onClick.call(this, ev)
      }

      // fix IE11/EDGE
      setTimeout(this.open.bind(this), 0)
    }
  }

  setRefs = ref => (this.fileInputEl = ref)

  render() {
    const { className, children, accept, disabled } = this.props
    const inputAttributes = {
      accept,
      disabled,
      type: 'file',
      style: { display: 'none' },
      multiple: false,
      ref: this.setRefs,
      onChange: this.onDrop,
      autoComplete: 'off',
    }

    return (
      <div className={className} onClick={this.onClick}>
        {children}
        <form encType="multipart/form-data">
          <input {...inputAttributes} />
        </form>
      </div>
    )
  }
}
FileUpload.defaultProps = {
  disabled: false,
  maxSize: Infinity,
  minSize: 0,
  pictureNb: 1,
}

export default FileUpload
