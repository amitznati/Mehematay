import 'date-fns';
import React from 'react';
import { Fab, Switch } from '@material-ui/core';
import {
  createStyles,
  makeStyles,
  ThemeProvider
} from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers';
import SimpleSelect from '../SimpleSelect/SimpleSelect';

const useStyles = makeStyles(() =>
  createStyles({
    gridItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 2rem',
      backgroundColor: '#eee'
    },
    timeInput: {
      width: '10rem'
    }
  })
);

export interface AlarmItemProps {
  isActive: boolean;
  selectedDate: Date;
  seconds: string;
  key: number;
}

export interface AlarmClockItemProps {
  alarm: AlarmItemProps;
  handleDateChange: (Date) => void;
  onActiveChange: (boolean) => void;
  handleSecondsChange: (string) => void;
  deleteAlarm: () => void;
}

const theme = {
  direction: 'ltr'
};

const secondsOptions = ['5', '10', '15', '20', '25', '30', '40', '50'];

const AlarmClockItem: React.FC<AlarmClockItemProps> = ({
  alarm,
  handleDateChange,
  onActiveChange,
  deleteAlarm,
  handleSecondsChange
}) => {
  // The first commit of Material-UI
  const classes = useStyles();
  const { isActive, selectedDate } = alarm;
  return (
    <div className={classes.gridItem}>
      <Fab color="primary" size="small" onClick={deleteAlarm}>
        <DeleteIcon />
      </Fab>
      <div className={classes.timeInput}>
        <ThemeProvider theme={theme}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <TimePicker
              margin="normal"
              ampm={false}
              label="שעה"
              value={selectedDate}
              onChange={handleDateChange}
            />
          </MuiPickersUtilsProvider>
        </ThemeProvider>
      </div>
      <SimpleSelect
        options={secondsOptions}
        selectedIndex={secondsOptions.indexOf(alarm.seconds)}
        onSelect={(index): void => handleSecondsChange(secondsOptions[index])}
        label="שניות"
      />
      <Switch
        checked={isActive}
        onChange={(): void => onActiveChange(!isActive)}
        color="primary"
        name="active"
      />
    </div>
  );
};

export default AlarmClockItem;
