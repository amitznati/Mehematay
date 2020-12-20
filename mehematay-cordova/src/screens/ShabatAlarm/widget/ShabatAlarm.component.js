import React, {Component} from 'react';
import ShabatAlarmMainView from './components/ShabatAlarm.mainView';
import {mapComponentProps} from './ShabatAlarm.propsMappar';
export default class ShabatAlarmComponent extends Component {
  render() {
    // if (window.cordova && window.cordova.platformId !== 'android') {
    //   return <div>not supported in this platform</div>;
    // }
    return <ShabatAlarmMainView {...mapComponentProps(this.props)} />;
  }
}
