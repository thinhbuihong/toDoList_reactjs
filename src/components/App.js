import React, {Component} from "react";
import "./App.css";
import Title from "./Title";
import Control from "./Control";
import Form from './Form';
import List from './List';
import {orderBy as sort} from 'lodash';

let {items} = require('../mocks/task');


class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      items: items,
      isShowForm: false,
      orderBy: 'name',
      orderDir: 'asc'
    }
  }

  handleSearch = (str)=>{
    this.setState({
      items: items.filter((item) =>{
        return item.name.includes(str);
      })
    })
  }

  handleDelete = (id) =>{
    items = this.state.items.filter((item) =>{
      return item.id !== id;
    });
    this.setState({
      items
    })
  }

  handleToggleForm = () =>{
    this.setState({
      isShowForm: !this.state.isShowForm
    })
  }

  handleSort = (orderBy, orderDir)=>{
    this.setState({orderBy, orderDir});
    this.setState({
      items: sort(this.state.items, [orderBy], [orderDir])
    })
  
  }

  handleSubmit = (task) =>{
    items.push(task);

    this.setState({
      isShowForm:false
    })
  }

  render(){
    
    return (
      <div className="App container">
        <Title></Title>

        <Control handleToggleForm={this.handleToggleForm} 
        isShowForm={this.state.isShowForm}
        handleSearch={this.handleSearch}
        orderBy={this.state.orderBy}
        orderDir={this.state.orderDir}
        handleSort={this.handleSort}></Control>

        {this.state.isShowForm?<Form handleToggleForm={this.handleToggleForm} 
        handleSubmit={this.handleSubmit}></Form>:null}

        <List items={this.state.items} handleDelete={this.handleDelete}></List>
      </div>
    );
    
  }
}

export default App;
