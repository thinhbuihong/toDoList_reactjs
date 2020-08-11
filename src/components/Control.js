import React, { Component } from 'react'
import Search from './Search'
import Sort from './Sort'

export default class Control extends Component {
  render() {
    return (
      <div className="row">
        <Search handleSearch={this.props.handleSearch}></Search>
        <Sort></Sort>
        
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
          <button type="button" className="btn btn-info btn-block" 
          onClick={this.props.handleToggleForm}>
          {this.props.isShowForm ? 'Close Form' : 'Add Task'}</button>
        </div>
      </div>
    )
  }
}
