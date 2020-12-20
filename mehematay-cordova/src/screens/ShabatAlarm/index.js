import ShabatAlarmApi from './api/ShabatAlarmApi';
import ShabatAlarmReducer from './api/ShabatAlarmReducer';
import ShabatAlarmConfig from './api/ShabatAlarmConfig';

export const widget = {
  api: ShabatAlarmApi,
  reducer: ShabatAlarmReducer,
  config: ShabatAlarmConfig,
};

export default widget;
