import 'date-fns';
import React from 'react';
import { Fab, Switch } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { MobileTimePicker } from '@mui/x-date-pickers/MobileTimePicker';
import SimpleSelect from '../SimpleSelect/SimpleSelect';


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

const secondsOptions = ['5', '10', '15', '20', '25', '30', '40', '50'];

const AlarmClockItem: React.FC<AlarmClockItemProps> = ({
                                                         alarm,
                                                         handleDateChange,
                                                         onActiveChange,
                                                         deleteAlarm,
                                                         handleSecondsChange
                                                       }) => {
  const { isActive, selectedDate } = alarm;
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 2rem',
        backgroundColor: '#eee'
    }}>
      <Fab color="primary" size="small" onClick={deleteAlarm}>
        <DeleteIcon />
      </Fab>
      <div style={{width: '10rem'}}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <MobileTimePicker
            ampm={false}
            label="שעה"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </LocalizationProvider>
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
