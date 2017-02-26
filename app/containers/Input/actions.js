import actionTypes from '../constants'

const addTask = (taskData) => {
  return {
    type: actionTypes.ADD_TASK,
    taskData
  };
};

export {
  addTask
};