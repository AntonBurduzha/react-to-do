import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from '../../store'
import { addTask } from './actions'

export class InputComponent extends Component{
  constructor(props){
    super(props);
    this.inputHandler = this.inputHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
    this.state = {
      name: '',
      status: 'opened',
      switchBtnEnabled: true
    }
  }
  inputHandler(e){
    this.setState({name: e.target.value});
  }
  clickHandler(){
    store.dispatch(addTask(this.state));
  }
  render(){
    return(
      <div>
        <input type="text" onChange={this.inputHandler}/>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default connect()(InputComponent);