import React, {Component} from "react";
import "./App.css";
import Title from "./Title";
import Control from "./Control";
import Form from './Form';
import List from './List';
import {orderBy as sort} from 'lodash';
import {v4} from 'uuid';

let {items} = require('../mocks/task');


class App extends Component{
  constructor(props) {
    super(props);
    this.state={
      items: items,
      isShowForm: false,
      orderBy: 'name',
      orderDir: 'asc',
      itemSelected: null,
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
      isShowForm: !this.state.isShowForm,
      itemSelected: null,
    });
  }

  handleSort = (orderBy, orderDir)=>{
    this.setState({orderBy, orderDir});
    this.setState({
      items: sort(this.state.items, [orderBy], [orderDir])
    })
  
  }

  handleSubmit = (task) =>{
    if(task.id === null){ //add new task
      items.push({...task, id:v4()});
    }else{ //edit task
      items.map((item) =>{
        if(item.id === task.id){
          item.level = task.level;
          item.name = task.name;
        }
        return '';
      });
    }

    this.setState({
      isShowForm:false
    })
  }

  handleEdit = (item) =>{
    this.setState({
      itemSelected: item,
      isShowForm:true
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
        handleSubmit={this.handleSubmit} itemSelected={this.state.itemSelected}></Form> : null}

        <List items={this.state.items} handleDelete={this.handleDelete} 
        handleEdit={this.handleEdit}></List>
      </div>
    );
    
  }
}

export default App;
