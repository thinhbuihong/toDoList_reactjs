import React, { Component } from 'react';

export default class Sort extends Component {
  handleSort = (orderBy, orderDir) =>{
    console.log(orderBy, orderDir);
    this.props.handleSort(orderBy, orderDir);
  }
  render() {
    let {orderBy, orderDir} = this.props;
    
    return (
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle btn-outline-info" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Sort by <span className="caret border" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li style={{cursor:'pointer'}} onClick={this.handleSort.bind(this, 'name', 'asc')}>Name ASC</li>
              <li style={{cursor:'pointer'}} onClick={this.handleSort.bind(this, 'name', 'desc')}>Name DESC</li>
              <li style={{cursor:'pointer'}} onClick={this.handleSort.bind(this, 'level', 'asc')}>Level ASC</li>
              <li style={{cursor:'pointer'}} onClick={this.handleSort.bind(this, 'level', 'desc')}>Level DESC</li>
            </ul>
            <span className="label label-success label-medium ml-2">
            {(orderBy+' - '+orderDir).toUpperCase()}</span>
          </div>
        </div>
    )
  }
}
