import React from 'react'

export const TrainingRow = ({ type, training, onHandleClick }) => {
  const { title, image } = training

  let btnValue = ''
  switch (type) {
    case 'add':
      btnValue = '+'
      break
    case 'selected':
      btnValue = 'x'
      break
    default:
      btnValue = 'ok'
  }

  return (
    <tr>
      <td>
        <img src={image} width="100px" height="100px" />
      </td>
      <td>{title}</td>
      <td>
        <button onClick={() => onHandleClick(training)}>{btnValue}</button>
      </td>
    </tr>
  )
}

export const TrainingCategoryRow = ({ category }) => (
  <tr>
    <th colSpan="3">{category}</th>
  </tr>
)
