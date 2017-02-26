import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../../store'
import { addTask } from './actions'

export default class InputComponent extends Component{
  constructor(props){
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      id: 0,
      name: '',
      status: 'opened',
      seconds: 0,
      switchBtnEnabled: true,
      removeBtnEnabled: true,
      completeBtnEnabled: true
    }
  }

  componentWillReceiveProps(nextProps){
    let taskId = nextProps.taskData.length === 0 ? 0 : nextProps.taskData.length;
    this.setState({id: taskId});
  }

  shouldComponentUpdate(){
    return false;
  }

  inputHandler(e){
    this.setState({name: e.target.value});
  }

  clickHandler(){
    if(this.state.name.length > 0){
      store.dispatch(addTask(this.state));
      this.taskName.value = '';
    }
  }

  render(){
    return(
      <div className="article-input">
        <input className="input-add-task"
               placeholder="Название задачи"
               type="text"
               ref={taskName => {this.taskName = taskName;}}
               onChange={this.inputHandler}/>
        <button className="btn-add-task"
                onClick={this.clickHandler}>Добавить</button>
      </div>
    );
  }
}