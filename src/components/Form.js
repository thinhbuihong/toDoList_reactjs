import React, { Component } from 'react'

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state={
      taskId:null,
      taskName:'',
      taskLevel:0,
    }
  }
  
  handleSubmit = (event) =>{
    this.props.handleSubmit({
      id: this.state.taskId,
      name: this.state.taskName,
      level: +this.state.taskLevel
    });

    event.preventDefault();
  }
  handleChange = (event) =>{
    let name = event.target.name;
    let value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    this.setState({
      [name]: value    
    });
    
  }

  componentWillMount() {
    let item = this.props.itemSelected;
    this.updateItem(item);

  }

  componentWillReceiveProps(nextProps) {
    this.updateItem(nextProps.itemSelected);
  }
  updateItem = (item)=>{
    if(item !== null) {
      this.setState({
          taskId: item.id,
          taskName: item.name,
          taskLevel: item.level,
      });
    }
  }
  
  

  render() {
    return (
      <div className="row mt-3">
        <div className="offset-md-7 col-md-5">
          <form onSubmit={this.handleSubmit} method="POST" className="form-inline">
            <div className="form-group">
              <label className="sr-only" >label</label>
              <input type="text" className="form-control" name="taskName" placeholder="Task Name" 
              value={this.state.taskName} onChange={this.handleChange}/>
            </div>
            <div className="form-group">

              <label className="sr-only" >label</label>
              <select name="taskLevel" id="inputDs" className="form-control" required="required" 
              value={this.state.taskLevel} onChange={this.handleChange}>
                
                <option value={0}>Low</option>
                <option value={1}>Medium</option>
                <option value={2}>High</option>
              </select>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary btn-sm">Submit</button>
              <button type="button" className="btn btn-default btn-sm border"
              onClick={this.props.handleToggleForm}>Cancel</button>

            </div>
          </form>
        </div>
      </div>
    )
  }
}
