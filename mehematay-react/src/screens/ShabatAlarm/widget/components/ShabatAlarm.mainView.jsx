import React from 'react';
import {AlarmClockList} from '../../../../components';

export default function ShabatAlarmMainView(props) {
  const {alarms, updateAlarms, setAlarm, cancelAlarm} = props;
  const addAlarm = () => {
    let key = 1;
    alarms.forEach((al) => {
      if (al.key >= key) {
        key = al.key + 1;
      }
    });
    const newAlarms = [...alarms, {
      key,
      selectedDate: new Date(),
      isActive: false,
      seconds: '10'
    }];
    updateAlarms(newAlarms);
  };
  const handleAlarmChange = alarm => {
    if (alarm.isActive && new Date() < new Date(alarm.selectedDate)) {
      setAlarm(alarm);
    }
  };
  const deleteAlarm = (alarm) => {
    if (alarm.isActive && new Date() < new Date(alarm.selectedDate)) {
      cancelAlarm(alarm);
    }
    const newAlarms = alarms.filter((a) => a.key !== alarm.key);
    updateAlarms(newAlarms);
  };
  const handleDateChange = ({ key }, date) => {
    const newAlarms = alarms.map((alarm) => {
      if (alarm.key === key) {
        alarm.selectedDate = date;
      }
      handleAlarmChange(alarm);
      return alarm;
    });
    updateAlarms(newAlarms);
  };
  const onActiveChange = ({ key }, isActive) => {
    const newAlarms = alarms.map((alarm) => {
      if (alarm.key === key) {
        alarm.isActive = isActive;
        if (isActive) {
          setAlarm(alarm);
        } else {
          cancelAlarm(alarm);
        }
      }
      return alarm;
    });
    updateAlarms(newAlarms);
  };
  const onSecondsChange = ({ key }, seconds) => {
    const newAlarms = alarms.map((alarm) => {
      if (alarm.key === key) {
        alarm.seconds = seconds;
        handleAlarmChange(alarm);
      }
      return alarm;
    });
    updateAlarms(newAlarms);
  };
  return (
    <div>
      <AlarmClockList
        alarms={alarms}
        handleDateChange={handleDateChange}
        onActiveChange={onActiveChange}
        addAlarm={addAlarm}
        deleteAlarm={deleteAlarm}
        handleSecondsChange={onSecondsChange}
      />
    </div>
  );
}
