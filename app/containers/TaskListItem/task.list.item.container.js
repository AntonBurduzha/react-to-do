import React, {Component} from 'react'
import { connect } from 'react-redux'
import store from '../../store'
import {removeTask, completeTask} from './actions'
import TaskTimer from '../TaskTimer/task.timer.container'

export  default class TaskListItem extends Component {
  constructor(props){
    super(props);
    this.removeTask = this.removeTask.bind(this);
    this.completeTask = this.completeTask.bind(this);
  }

  removeTask(){
    store.dispatch(removeTask(this.props.id));
  }

  completeTask(){
    store.dispatch(completeTask(this.props.id, 'closed'));
  }

  render(){
    return (
      <div className="article-tasks-current">
        <p className={this.props.taskData.status === 'opened' ? 'text-task-name' : 'text-task-name task-closed'}>
          {this.props.taskData.name}
        </p>
        <TaskTimer taskData={this.props.taskData} />
        <div className="article-tasks-control">
          <button className="btn-remove-task"
                  disabled={!this.props.taskData.removeBtnEnabled}
                  onClick={this.removeTask}>Удалить</button>
          <button className="btn-complete-task"
                  disabled={!this.props.taskData.completeBtnEnabled}
                  onClick={this.completeTask}>Завершить</button>
        </div>
      </div>
    );
  }
}