import React from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import AlarmClockItem, { AlarmItemProps } from './AlarmClockItem';


export interface AlarmClockListProps {
  alarms: Array<AlarmItemProps>;
  handleDateChange: (AlarmItemProps, Date) => void;
  onActiveChange: (AlarmItemProps, boolean) => void;
  handleSecondsChange: (AlarmItemProps, string) => void;
  addAlarm: () => void;
  deleteAlarm: (AlarmItemProps) => void;
}

const AlarmClockList: React.FC<AlarmClockListProps> = ({
                                                         alarms,
                                                         handleDateChange,
                                                         onActiveChange,
                                                         addAlarm,
                                                         deleteAlarm,
                                                         handleSecondsChange
                                                       }) => {
  return (
    <div>
      {alarms.map((alarm) => (
        <AlarmClockItem
          key={alarm.key}
          handleDateChange={ (date): void => handleDateChange(alarm, date)}
          alarm={alarm}
          onActiveChange={(isActive): void => onActiveChange(alarm, isActive)}
          deleteAlarm={(): void => deleteAlarm(alarm)}
          handleSecondsChange={(seconds): void => handleSecondsChange(alarm, seconds)}
        />
      ))}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '2rem'
        }}
      >
        <Fab color="primary" aria-label="add" onClick={addAlarm}>
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
};

export default AlarmClockList;
