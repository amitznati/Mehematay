import React from 'react';
import { DailyTimeLineProps } from './DailyTimeLine.types';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import DayTimeItem from '../DayTimeItem/DayTimeItem';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      fontSize: '1.6rem',
      textAlign: 'right',
      padding: '2rem 0',
      backgroundImage: `linear-gradient(
  to bottom,
  rgb(3, 3, 3),
  rgb(3, 3, 3),
      rgb(35, 35, 41),
      rgb(33, 94, 124),
      rgba(30, 152, 209, 1),
      rgb(202, 229, 243),
      rgb(202, 229, 243),
      rgb(202, 229, 243),
      rgb(202, 229, 243),
      rgb(240, 231, 26),
      rgb(202, 229, 243),
      rgb(202, 229, 243),
      rgb(202, 229, 243),
      rgb(202, 229, 243),
      rgb(245, 86, 12),
      rgb(28, 9, 1),
      rgb(3, 3, 3),
      rgb(3, 3, 3)
      )`
    }
  })
);

const DailyTimeLine: React.FC<DailyTimeLineProps> = ({ dayTimes }) => {
  const classes = useStyles(dayTimes);
  return (
    <div className={classes.root}>
      {dayTimes.map((dayTime) => (
        <DayTimeItem key={dayTime.key} dayTime={dayTime} />
      ))}
    </div>
  );
};
export default DailyTimeLine;
