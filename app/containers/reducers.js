import actionTypes from './constants'
import update from 'immutability-helper';

let newTaskState = [];

const taskReducer = (state = [], action) => {
  switch(action.type){
    case actionTypes.ADD_TASK:
      newTaskState = update(state, {$push: [action.taskData]});
      return newTaskState;
    case actionTypes.REMOVE_TASK:
      newTaskState = update(state, {$splice: [[action.id, 1]]});
      return newTaskState;
    case actionTypes.COMPLETE_TASK:
      newTaskState = update(state, {[action.id]: {status: {$set: action.status}}});
      return newTaskState;
    case actionTypes.DISABLE_SWITCH_BTNS:
      newTaskState = state.map(task => {
        if(action.id !== task.id){
          task.switchBtnEnabled = false;
        }
        task.removeBtnEnabled = false;
        task.completeBtnEnabled = false;
        return task;
      });
      return newTaskState;
    case actionTypes.ENABLE_SWITCH_BTNS:
      newTaskState = state.map(task => {
        task.switchBtnEnabled = true;
        task.removeBtnEnabled = true;
        task.completeBtnEnabled = true;
        return task;
      });
      return newTaskState;
    default:
      return state;
  }
};

export default taskReducer;