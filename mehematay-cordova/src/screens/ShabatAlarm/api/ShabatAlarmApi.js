import BaseApi from '../../../sdk/BaseApi';
import selectors from './ShabatAlarmSelectors';

export const ActionTypes = {
  UPDATE_ALARMS: 'UPDATE_ALARMS',
};
export default class ShabatAlarmApi extends BaseApi {
  constructor(store, APIsInstances) {
    super(store, APIsInstances);
    const existingAlarmsStr = localStorage.getItem('alarms');
    const existingAlarms = existingAlarmsStr && JSON.parse(existingAlarmsStr);
    if (existingAlarms) {
      const filteredAlarms = existingAlarms.map((alarm) => {
        if (new Date() > new Date(alarm.selectedDate)) {
          alarm.isActive = false;
        }
        return alarm;
      });
      this.dispatchStoreAction({type: ActionTypes.UPDATE_ALARMS, payload: filteredAlarms});
    }
  }
  updateAlarms = data => {
    this.dispatchStoreAction({type: ActionTypes.UPDATE_ALARMS, payload: data});
    localStorage.setItem('alarms', JSON.stringify(data));
  };

  setAlarm = alarm => {
    if (window.WakeupPlugin) {
      const date = new Date(alarm.selectedDate);
      window.WakeupPlugin.setAlarm({
        time: {
          minute: date.getMinutes(),
          hour: date.getHours()
        },
        seconds: alarm.seconds,
        key: alarm.key
      }, console.log, console.log);
    }
  };

  cancelAlarm = alarm => {
    if (window.WakeupPlugin) {
      window.WakeupPlugin.cancelAlarm({
        key: alarm.key
      }, console.log, console.log);
    }
  };

  getAlarmsSelector = () => {
    return selectors.getAlarmsSelector(this.store.getState());
  };
}
