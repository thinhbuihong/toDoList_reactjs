import React, { Component } from 'react'
import Item from './Item'

export default class List extends Component {
  render() {
    const items = this.props.items;
    const Items = items.map((item, i) =>{
      return <Item key={i} item={item} index={i+1} handleDelete={this.props.handleDelete}></Item>
    })
    return (
      <div className="panel panel-success">
        <div className="panel-heading">List Task</div>
        <table className="table table-hover ">
          <thead>
            <tr>
              <th style={{ width: '10%' }} className="text-center">#</th>
              <th>Task</th>
              <th style={{ width: '20%' }} className="text-center">Level</th>
              <th style={{ width: '20%' }}>Action</th>
            </tr>
          </thead>
          <tbody>
            
            {Items}
            
          </tbody>
        </table>
      </div>

    )
  }
}
