const addTask = (name) => {
  return {
    type: 'ADD_TASK',
    name
  };
};

const removeTask = (id) => {
  return {
    type: 'REMOVE_TASK',
    id
  };
};

const completeTask = (id, status) => {
  return {
    type: 'COMPLETE_TASK',
    id,
    status
  };
};

const setTaskProgress = (id, toggleOff) => {
  return {
    type: 'SET_TASK_PROGRESS',
    id,
    toggleOff
  };
};

const disableSwitchBtns = (id) => {
  return {
    type: 'DISABLE_SWITCH_BTNS',
    id
  };
};

const enableSwitchBtns = () => {
  return {
    type: 'ENABLE_SWITCH_BTNS'
  };
};

export {
  addTask,
  removeTask,
  completeTask,
  setTaskProgress,
  disableSwitchBtns,
  enableSwitchBtns
};