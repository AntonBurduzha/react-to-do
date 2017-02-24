import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {InputComponent} from './input.container'
import {TasksView} from './task.list.container'

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    //console.log(this.props.data);
    return(
      <div className="main-article">
        <InputComponent clickHandler={this.clickHandler}/>
        <TasksView
          taskData={this.props.data}/>
      </div>
    )
  }
}

App.propTypes = {
  data: PropTypes.array.isRequired
};


const mapStateToProps = function(state) {
  return {
    data: state.testState
  };
};

export default connect(mapStateToProps)(App);