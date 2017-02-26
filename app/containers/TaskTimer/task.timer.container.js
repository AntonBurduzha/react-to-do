import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import store from '../../store'
import Switch from 'react-toggle-switch'
import {disableSwitchBtns, enableSwitchBtns} from './actions'

export default class TaskTimer extends Component {
  constructor(props){
    super(props);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.setTime = this.setTime.bind(this);
    this.getTime = this.getTime.bind(this);
    this.state = {
      switchBtnEnabled: false,
      switch: null,
      seconds: 0
    };
  }

  setTime(){
    this.setState({seconds: this.state.seconds + 1});
    this.startTimer();
  }

  startTimer(){
    this.setState({switch: setTimeout(this.setTime, 1000)});
  }

  stopTimer(){
    clearTimeout(this.state.switch);
  }

  getTime(){
    let hours, minutes, seconds;
    hours = Math.floor(this.state.seconds / 3600);
    minutes = Math.floor((this.state.seconds - hours) / 60);
    seconds = this.state.seconds - (hours * 3600) - (minutes * 60);

    const correctTIme = time => (time > 9) ? `${time}` : `0${time}`;
    return `${correctTIme(hours)}:${correctTIme(minutes)}:${correctTIme(seconds)}`;
  }

  toggle(){
    this.setState({switchBtnEnabled: !this.state.switchBtnEnabled});
    if(!this.state.switchBtnEnabled) {
      store.dispatch(disableSwitchBtns(this.props.taskData.id));
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
      <div className="article-timer">
        <Switch
          onClick={this.toggle.bind(this)}
          on={this.state.switchBtnEnabled}
          enabled={this.props.taskData.status === 'opened' ? this.props.taskData.switchBtnEnabled : false}/>
          <p className="text-timer">{timer}</p>
      </div>
    )
  }
}