import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import store from '../../store'
import Switch from 'react-toggle-switch'
import {disableSwitchBtns, enableSwitchBtns} from './actions'

export class TaskTimer extends Component {
  constructor(props){
    super(props);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.setTime = this.setTime.bind(this);
    this.getTime = this.getTime.bind(this);
    this.state = {
      switchBtnEnabled: false,
      switch: null,
      sec: 0,
      min: 0,
      hour: 0
    };
  }

  setTime(){
    this.setState({sec: this.state.sec + 1});
    if (this.state.sec >= 60) {
      this.setState({sec: 0, min: this.state.min + 1});
      if (this.state.min >= 60) {
        this.setState({min: 0, hour: this.state.hour + 1});
      }
    }
    this.startTimer();
  }
  startTimer(){
    this.setState({switch: setTimeout(this.setTime, 1000)});
  }
  stopTimer(){
    clearTimeout(this.state.switch);
  }
  getTime(){
    let hours = ``,
      minutes = ``,
      seconds = ``;
    if(this.state.hour){
      if(this.state.hour > 9){
        hours = `${this.state.hour}`;
      }
      else{
        hours = `0${this.state.hour}`;
      }
    }
    else {
      hours = '00';
    }
    if(this.state.min){
      if(this.state.min > 9){
        minutes = `${this.state.hour}`;
      }
      else{
        minutes = `0${this.state.min}`;
      }
    }
    else {
      minutes = '00';
    }
    if(this.state.sec > 9){
      seconds = `${this.state.hour}`;
    }
    else{
      seconds = `0${this.state.sec}`;
    }
    return `${hours}:${minutes}:${seconds}`;
  }

  toggle(){
    this.setState({switchBtnEnabled: !this.state.switchBtnEnabled});
    if(!this.state.switchBtnEnabled) {
      store.dispatch(disableSwitchBtns(this.props.id));
      this.startTimer();
    }
    else {
      store.dispatch(enableSwitchBtns());
      this.stopTimer();
    }
  }

  render(){
    let timer = this.getTime();
    return(
      <div>
        <Switch onClick={this.toggle.bind(this)} on={this.state.switchBtnEnabled} enabled={this.props.switchBtnEnabled}/>
        <h1>{timer}</h1>
      </div>
    )
  }
}

export default connect()(TaskTimer);