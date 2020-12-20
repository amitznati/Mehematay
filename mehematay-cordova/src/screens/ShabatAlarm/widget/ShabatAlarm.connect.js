import {connect} from 'react-redux';
import {getInstance} from '../../../sdk';
import ShabatAlarmComponent from './ShabatAlarm.component';

const shabatAlarmApi = getInstance().ShabatAlarmApi;

const mapStateToProps = () => {
  return {
    alarms: shabatAlarmApi.getAlarmsSelector(),
  };
};

const mapDispatchToProps = () => ({
  updateAlarms: shabatAlarmApi.updateAlarms,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShabatAlarmComponent);
