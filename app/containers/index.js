import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import InputComponent from './Input/input.container'
import TaskList from './TaskList/task.list.container'

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    //console.log(this.props.taskData);
    return(
      <div className="container-fluid">
        <h1 className="text-center">Simple To-Do</h1>
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <InputComponent taskData={this.props.taskData}/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-offset-3 col-md-6">
            <TaskList taskData={this.props.taskData}/>
          </div>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  taskData: PropTypes.array.isRequired
};


const mapStateToProps = function(state) {
  return {
    taskData: state.taskState
  };
};

export default connect(mapStateToProps)(App);