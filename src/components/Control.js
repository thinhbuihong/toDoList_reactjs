import React, { Component } from 'react'
import Search from './Search'
import Sort from './Sort'

export default class Control extends Component {
  render() {
    let {handleSearch, handleToggleForm, isShowForm, 
    orderBy, orderDir, handleSort} = this.props;

    return (
      <div className="row">
        <Search handleSearch={handleSearch}></Search>
        <Sort orderBy={orderBy} orderDir={orderDir} handleSort={handleSort}></Sort>
        
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
          <button type="button" className="btn btn-info btn-block" 
          onClick={handleToggleForm}>
          {isShowForm ? 'Close Form' : 'Add Task'}</button>
        </div>
      </div>
    )
  }
}
