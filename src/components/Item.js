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
          <button type="button" className="btn btn-warning">Edit</button>
          <button type="button" className="btn btn-danger">Delete</button>
        </td>
      </tr>
    )
  }
}
