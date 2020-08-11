import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <div className="row mt-3">
        <div className="offset-md-7 col-md-5">
          <form action="" method="POST" className="form-inline">
            <div className="form-group">
              <label className="sr-only" >label</label>
              <input type="text" className="form-control" placeholder="Task Name" />
            </div>
            <div className="form-group">
              <label className="sr-only" >label</label>
              <select name="ds" id="inputDs" className="form-control" required="required" >
                Small
                <option value={1}>Medium</option>
                <option value={2}>High</option>
              </select>
            </div>
            <div className="form-group">
              <button type="button" className="btn btn-primary btn-sm">Submit</button>
              <button type="button" className="btn btn-default btn-sm border"
              onClick={this.props.handleToggleForm}>Cancel</button>

            </div>
          </form>
        </div>
      </div>
    )
  }
}
