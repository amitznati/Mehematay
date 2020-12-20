import React from 'react';
import {AlarmClockList} from 'mehematay-ui-library';

export default function ShabatAlarmMainView(props) {
  const {alarms, updateAlarms, setAlarm, cancelAlarm} = props;
  const addAlarm = () => {
    const newAlarms = [...alarms, {
      key: new Date().getTime(),
      selectedDate: new Date(),
      isActive: false,
      seconds: '10'
    }];
    updateAlarms(newAlarms);
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
  const onSecondsChange = ({ key, isActive }, seconds) => {
    const newAlarms = alarms.map((alarm) => {
      if (alarm.key === key) {
        alarm.seconds = seconds;
        if (isActive) {
          setAlarm(alarm);
        }
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
