import React, { Component } from 'react'
import { connect } from 'react-redux'

import { TrainingRow } from '../components/TrainingRow'

import {
  START_TRAINING_SELECTED_LIST,
  REMOVE_TRAINING,
} from '../constants/actionTypes'

class TrainingSelectedList extends Component {
  componentWillMount() {
    this.props.onload()
  }

  render() {
    const { selectedTrainingList } = this.props
    const jsxRender = []
    selectedTrainingList.forEach(selectedTraining => {
      jsxRender.push(
        <TrainingRow
          key={`select-${selectedTraining.id}`}
          training={selectedTraining}
          type="selected"
          onHandleClick={this.props.onRemove}
        />
      )
    })

    return (
      <div>
        <h2>My training list</h2>
        {jsxRender.length === 0 && <span>NOTHING HERE...</span>}
        <table>
          <tbody>{jsxRender}</tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = ({ selectedTrainingList }) => ({
  selectedTrainingList,
})

const mapDispatchToProps = dispatch => ({
  onload: () => dispatch({ type: START_TRAINING_SELECTED_LIST }),
  onRemove: training =>
    dispatch({ type: REMOVE_TRAINING, payload: { id: training.id } }),
})

export default connect(mapStateToProps, mapDispatchToProps)(
  TrainingSelectedList
)
