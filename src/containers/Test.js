import { Link } from 'react-router-dom'

import React from 'react'
import { connect } from 'react-redux'

class Test extends React.Component {
  state = {
    inputs: [1, 2, 3, 4],
    selectedInputs: [],
  }

  handleClick = input => {
    const { selectedInputs } = this.state
    let newSelectedInput

    if (!selectedInputs.includes(input))
      newSelectedInput = [input, ...selectedInputs]
    else {
      newSelectedInput = selectedInputs.filter(item => input !== item)
    }
    this.setState({ selectedInputs: newSelectedInput })
  }

  isChecked = value => {
    const { selectedInputs } = this.state
    if (selectedInputs.includes(value)) {
      return true
    }
    return false
  }

  checkAll = () => {
    const { selectedInputs, inputs } = this.state
    if (inputs.length === selectedInputs.length) {
      this.setState({ selectedInputs: [] })
    } else {
      this.setState({ selectedInputs: [...inputs] })
    }
  }

  render() {
    const { inputs, selectedInputs } = this.state
    console.log(selectedInputs)
    return (
      <div>
        <h3>React-test-1</h3>
        <input type="checkbox" onClick={this.checkAll} />
        {inputs.map(input => (
          <div>
            <input
              type="checkbox"
              checked={this.isChecked(input)}
              onClick={() => this.handleClick(input)}
            />
            <br />
          </div>
        ))}
      </div>
    )
  }
}

export default Test
