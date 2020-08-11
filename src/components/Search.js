import React, { Component } from 'react'

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state={
      search:''
    }
  }
  
  handleClear = () =>{
    this.setState({search:''})
    this.props.handleSearch('');
  }
  handleSearchChange  = (event) =>{
    const str = event.target.value;
    this.setState({search: str});
    this.props.handleSearch(str);
  }

  render() {
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="input-group">
          <input type="text" className="form-control" value={this.state.search}
          onChange={this.handleSearchChange} placeholder="Search for..." />
          <span className="input-group-btn">
            <button className="btn btn-warning" onClick={this.handleClear} type="button">Clear</button>
          </span>
        </div>
      </div>
    )
  }
}
