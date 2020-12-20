import {createSelector} from 'reselect';
import config from './ShabatAlarmConfig';

const sliceSelector = state => state[config.sliceName];

export const getAlarmsSelector = createSelector(
  sliceSelector,
  slice => {
    return slice.alarms;
  },
);

export default {
  getAlarmsSelector,
};
