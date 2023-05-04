import React from 'react';
import AlarmClockItem, { AlarmItemProps } from './AlarmClockItem';
import AlarmClockList from './AlarmClockList';

export default {
  title: 'AlarmClockItem',
  component: AlarmClockItem,
  decorators: [
    (story: () => React.ReactNode): JSX.Element => (
      <div className="story-wrap">{story()}</div>
    )
  ]
};

export const AlarmClock = (): JSX.Element => {
  const [selectedDate, handleDateChange] = React.useState(new Date());
  const [isActive, onActiveChange] = React.useState(false);
  const [seconds, handleSecondsChange] = React.useState('5');
  return (
    <AlarmClockItem
        handleDateChange={handleDateChange}
        handleSecondsChange={handleSecondsChange}
        alarm={{ isActive, selectedDate, key: selectedDate.getTime(), seconds }}
        onActiveChange={onActiveChange}
        deleteAlarm={(): void => {
          console.log('delete alarm');
        }}
    />
  );
};
export const AlarmSet = (): JSX.Element => {
  const [alarms, updateAlarms] = React.useState<Array<AlarmItemProps>>([]);
  const addAlarm = (): void => {
    const newAlarms = [
      ...alarms,
      {
        key: new Date().getTime(),
        selectedDate: new Date(),
        isActive: false,
        seconds: '5'
      }
    ];
    updateAlarms(newAlarms);
  };
  const deleteAlarm = (alarm: AlarmItemProps): void => {
    const newAlarms = alarms.filter((a) => a.key !== alarm.key);
    updateAlarms(newAlarms);
  };
  const handleDateChange = (key, date): void => {
    const newAlarms = alarms.map((alarm) => {
      if (alarm.key === key) {
        alarm.selectedDate = date;
      }
      return alarm;
    });
    updateAlarms(newAlarms);
  };
  const onActiveChange = (key, isActive): void => {
    const newAlarms = alarms.map((alarm) => {
      if (alarm.key === key) {
        alarm.isActive = isActive;
      }
      return alarm;
    });
    updateAlarms(newAlarms);
  };
  const onSecondsChanged = (key, seconds): void => {
    const newAlarms = alarms.map((alarm) => {
      if (alarm.key === key) {
        alarm.seconds = seconds;
      }
      return alarm;
    });
    updateAlarms(newAlarms);
  }
  return (
    <div>
      <AlarmClockList
        alarms={alarms}
        handleSecondsChange={onSecondsChanged}
        handleDateChange={handleDateChange}
        onActiveChange={onActiveChange}
        addAlarm={addAlarm}
        deleteAlarm={deleteAlarm}
      />
    </div>
  );
};
