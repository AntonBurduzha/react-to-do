import React, {Component} from 'react'
import { connect } from 'react-redux'
import store from '../../store'
import {removeTask, completeTask} from './actions'
import {TaskTimer} from './task.timer'


const TasksView = (props) => {
  return (
    <TaskList taskData={props.taskData}/>
  );
};

const TaskList = (props) => {
  let taskData = props.taskData.map((task, taskNumber) => {
    return <TaskListItem key={taskNumber}
                         taskName={task.name}
                         taskStatus={task.status}
                         switchBtnEnabled={task.switchBtnEnabled}
                         id={taskNumber}/>
  });
  return <div>{taskData}</div>
};

class TaskListItem extends Component {
  constructor(props){
    super(props);
    this.remove = this.remove.bind(this);
    this.complete = this.complete.bind(this);
  }
  remove(){
    store.dispatch(removeTask(this.props.id));
  }
  complete(){
    store.dispatch(completeTask(this.props.id, 'closed'));
  }

  render(){
    return (
      <div>
        <p className={this.props.taskStatus === 'opened' ? '' : 'task-closed'}>{this.props.taskName}</p>
        <TaskTimer switchBtnEnabled={this.props.switchBtnEnabled} id={this.props.id} />
        <button onClick={this.remove}>Remove</button>
        <button onClick={this.complete}>Complete</button>
      </div>
    );
  }
}

export default connect()(TaskListItem);

export {
  TasksView
}