import React, { Component } from 'react'
import { connect } from 'react-redux'

import SearchBar from '../components/SearchBar'
import TrainingTable from './TrainingTable'
import TrainingSelectedList from './TrainingSelectedList'

class CreateProgram extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filterText: '',
      filterCategory: '',
    }
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this)
    this.handleFilterCategoryChange = this.handleFilterCategoryChange.bind(this)
  }

  handleFilterTextChange(filterText) {
    console.log('textChange', filterText)
    this.setState({
      filterText,
    })
  }

  handleFilterCategoryChange(filterCategory) {
    this.setState({
      filterCategory,
    })
  }

  render() {
    const { selectedTrainingList } = this.props
    const { filterCategory, filterText } = this.state
    return (
      <div className="CreateProgram">
        <SearchBar
          filterCategory={filterCategory}
          filterText={filterText}
          onFilterCategoryChange={this.handleFilterCategoryChange}
          onFilterTextChange={this.handleFilterTextChange}
        />

        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <TrainingTable {...this.state} selected={selectedTrainingList} />
            </div>
            <div className="col-sm-6">
              <TrainingSelectedList />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ selectedTrainingList }) => ({
  selectedTrainingList,
})

export default connect(mapStateToProps)(CreateProgram)
