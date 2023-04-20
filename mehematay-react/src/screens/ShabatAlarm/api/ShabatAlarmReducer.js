import {ActionTypes} from './ShabatAlarmApi';
const initialState = {
  alarms: []
};
// const SUCCESS = '_SUCCESS';
const reducer = (state = initialState, action) => {
  let newState = {...state};
  const payload = action && action.payload;
  const type = action && action.type;
  switch (type) {
  case ActionTypes.UPDATE_ALARMS:
    newState = {
      ...state,
      alarms: payload,
    };
    break;
  default:
    return newState;
  }
  return newState;
};

export default reducer;
