import React from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import AlarmClockItem, { AlarmItemProps } from './AlarmClockItem';
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {},
    addIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '2rem'
    }
  })
);

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
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {alarms.map((alarm) => (
        <AlarmClockItem
          key={alarm.key}
          {...{
            handleDateChange: (date): void => handleDateChange(alarm, date),
            alarm,
            onActiveChange: (isActive): void => onActiveChange(alarm, isActive),
            deleteAlarm: (): void => deleteAlarm(alarm),
            handleSecondsChange: (seconds): void =>
              handleSecondsChange(alarm, seconds)
          }}
        />
      ))}
      <div className={classes.addIcon}>
        <Fab color="primary" aria-label="add" onClick={addAlarm}>
          <AddIcon />
        </Fab>
      </div>
    </div>
  );
};

export default AlarmClockList;
