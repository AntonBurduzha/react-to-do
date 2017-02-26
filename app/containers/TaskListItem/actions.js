import actionTypes from '../constants'

const removeTask = (id) => {
  return {
    type: actionTypes.REMOVE_TASK,
    id
  };
};

const completeTask = (id, status) => {
  return {
    type: actionTypes.COMPLETE_TASK,
    id,
    status
  };
};

export {
  removeTask,
  completeTask
};