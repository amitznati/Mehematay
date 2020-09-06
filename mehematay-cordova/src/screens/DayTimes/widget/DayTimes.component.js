import React from 'react';
import DayTimesMainView from './components/DayTimes.mainView';

export default class DayTimesComponent extends React.Component {
  componentDidMount() {
    const {loadSunTimesCurrentLocation} = this.props;
    loadSunTimesCurrentLocation();
  }
  render() {
    return (
        <DayTimesMainView {...this.props} />
    );
  }
}
