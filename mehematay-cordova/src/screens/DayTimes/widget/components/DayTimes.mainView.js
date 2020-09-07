import React from 'react';
import {Calendar, DailyTimeLine, Grid, SelectedDayInfo } from 'mehematay-ui-library';
import SearchLocation from '../../../SearchLocation/widget/SearchLocation.connect';

export default function DayTimesMainView({
  dayTimes,
  onDateChange,
  selectedDate,
  onSelectLocation,
  selectedLocation,
  selectedDateFormatted,
  nextEvents,
  onSearchMyLocation
}) {
  return (
    <Grid container>
      <Grid item xs={12} md={6} lg={6}>
        <Grid container>
          <Grid item xs={12}>
            <SearchLocation
              onSelectLocation={onSelectLocation}
              selectedLocation={selectedLocation}
              onSearchMyLocation={onSearchMyLocation}
            />
          </Grid>
          <Grid item xs={12}>
            <Calendar
              selectedDate={selectedDate}
              onSelectDate={onDateChange}
              autoCloseOnSelect
            />
          </Grid>
          <Grid item xs={12}>
            <SelectedDayInfo
              selectedDateFormatted={selectedDateFormatted}
              nextEvents={nextEvents}
              selectedLocation={selectedLocation}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <DailyTimeLine dayTimes={dayTimes} />
      </Grid>
    </Grid>
  );
}
