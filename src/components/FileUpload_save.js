import React, { Component } from 'react'

import agent from '../agent'

class FileUpload extends Component {
  constructor(...args) {
    super(...args)
    this.onClick = this.onClick.bind(this)

    this.isFileDialogActive = false
  }

  open = () => {
    this.isFileDialogActive = true
    this.fileInputEl.value = null
    this.fileInputEl.click()
  }

  onDrop = ev => {
    ev.preventDefault()
    const fileList = ev.target.files[0] || []

    const formData = new FormData()

    formData.append('files', fileList)
    console.log(fileList, formData.entries())
    agent.Img.add(formData)
  }

  // onSubmit = ev => {
  //   ev.preventDefault() // Stop form submit
  //   this.fileUpload(this.state.file).then((response)=>{
  //     console.log(response.data);
  //   })
  // }

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
      <div
        className={className}
        onClick={this.onClick}
        encType="multipart/form-data"
      >
        {children}
        <input {...inputAttributes} />
      </div>
    )
  }
}
FileUpload.defaultProps = {
  disabled: false,
  maxSize: Infinity,
  minSize: 0,
}

export default FileUpload
