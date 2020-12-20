import BaseApi from '../../../sdk/BaseApi';
import selectors from './ShabatAlarmSelectors';

export const ActionTypes = {
  UPDATE_ALARMS: 'UPDATE_ALARMS',
};
export default class ShabatAlarmApi extends BaseApi {
  constructor(store, APIsInstances) {
    super(store, APIsInstances);
    const existingAlarms = localStorage.getItem('alarms');
    if (existingAlarms) {
      this.dispatchStoreAction({type: ActionTypes.UPDATE_ALARMS, payload: JSON.parse(existingAlarms)});
    }
  }
  updateAlarms = data => {
    this.dispatchStoreAction({type: ActionTypes.UPDATE_ALARMS, payload: data});
    localStorage.setItem('alarms', JSON.stringify(data));
  };

  getAlarmsSelector = () => {
    return selectors.getAlarmsSelector(this.store.getState());
  };
}
