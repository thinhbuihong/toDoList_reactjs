import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const {item, index}  = this.props;
    return (
      <tr>
        <td className="text-center">{index}</td>
        <td>{item.name}</td>
        <td className="text-center"><span className="">
        {item.level === 0 ? 'low': item.level === 1 ? 'medium' : 'high'}</span></td>
        <td>
          <button type="button" className="btn btn-warning"
          onClick={this.props.handleEdit}>Edit</button>
          <button type="button" className="btn btn-danger" 
          onClick={this.props.handleDelete.bind(this, item.id)}>Delete</button>
        </td>
      </tr>
    )
  }
}
