import React, {Component} from 'react'
import { connect } from 'react-redux'
var dragula = require('dragula');
import TaskListItem from '../TaskListItem/task.list.item.container'

export default class TaskList extends Component {
  constructor(props){
    super(props);
  }

  dragulaDecorator(componentBackingInstance) {
    if (componentBackingInstance) {
      dragula([componentBackingInstance]);
    }
  }

  render(){
    let taskData = this.props.taskData.map((task, taskNumber) => {
      return <TaskListItem key={taskNumber} taskData={task} id={taskNumber} />
    });
    return <div className="article-tasks "
      ref={this.dragulaDecorator.bind(this)}>{taskData}</div>
  }
}