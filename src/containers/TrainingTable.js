import React from 'react'
import { connect } from 'react-redux'

import { TrainingRow, TrainingCategoryRow } from '../components/TrainingRow'

import { ADD_TRAINING } from '../constants/actionTypes'

// class TrainingTable extends Component {
const TrainingTable = ({
  onClickAdd,
  trainings,
  filterText,
  filterCategory,
  selected = [],
}) => {
  const rows = []
  let lastCategory = ''

  trainings
    .filter(
      (training, i) =>
        // already add
        selected.map(x => x.id).indexOf(training.id) === -1 &&
        !training.title.toLowerCase().indexOf(filterText.toLowerCase()) &&
        !training.category.toLowerCase().indexOf(filterCategory.toLowerCase())
    )
    .forEach(training => {
      if (training.category !== lastCategory) {
        rows.push(
          <TrainingCategoryRow
            key={training.category}
            category={training.category}
          />
        )
      }

      rows.push(
        <TrainingRow
          key={`add-${training.id}`}
          training={training}
          type="add"
          onHandleClick={() => {
            onClickAdd(training)
          }}
        />
      )

      lastCategory = training.category
    })

  return (
    <div>
      <h2>training list</h2>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  )
}

const mapStateToProps = state => ({
  trainings: state.trainings,
})

const mapDispatchToProps = dispatch => ({
  onClickAdd: training => dispatch({ type: ADD_TRAINING, payload: training }),
})

export default connect(mapStateToProps, mapDispatchToProps)(TrainingTable)
