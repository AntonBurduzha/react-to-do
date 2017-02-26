import actionTypes from '../constants'

const disableSwitchBtns = (id) => {
  return {
    type: actionTypes.DISABLE_SWITCH_BTNS,
    id
  };
};

const enableSwitchBtns = () => {
  return {
    type: actionTypes.ENABLE_SWITCH_BTNS
  };
};

export {
  disableSwitchBtns,
  enableSwitchBtns
};
