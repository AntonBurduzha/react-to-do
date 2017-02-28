import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import InputComponent from './Input/input.container'
import TaskList from './TaskList/task.list.container'
import { setPageHeight } from './common'

class App extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    setPageHeight();
  }

  render(){
    return(
      <div className="container-fluid">
        <div className="row article-fluid">
          <div className="col-md-offset-3 col-md-6 article-main">
            <h1 className="title-main text-center">Simple To-Do</h1>
            <InputComponent taskData={this.props.taskData}/>
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