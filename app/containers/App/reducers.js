import update from 'immutability-helper';

/*const initTestState = [
  {
    name: ''
  }
];*/
let newTestState = {};

const testReducer = (state = [], action) => {
  switch(action.type){
    case 'ADD_TASK':
      newTestState = update(state, {$push: [action.name]});
      return newTestState;
    case 'REMOVE_TASK':
      newTestState = update(state, {$splice: [[action.id, 1]]});
      return newTestState;
    case 'COMPLETE_TASK':
      newTestState = update(state, {[action.id]: {status: {$set: action.status}}});
      return newTestState;
    case 'DISABLE_SWITCH_BTNS':
      newTestState = state.map((task, taskNumber) => {
        if(action.id !== taskNumber){
          task.switchBtnEnabled = false;
        }
        return task;
      });
      return newTestState;
    case 'ENABLE_SWITCH_BTNS':
      newTestState = state.map((task) => {
        task.switchBtnEnabled = true;
        return task;
      });
      return newTestState;
    default:
      return state;
  }
};

export default testReducer;