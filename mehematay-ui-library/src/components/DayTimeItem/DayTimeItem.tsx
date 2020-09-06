import React from 'react';
import { DayTimeItemProps } from './DayTimeItem.types';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dayTimeItem: {
      margin: '2rem',
      display: 'inline-flex',
      width: '90%',
      justifyContent: 'flex-end',
      borderTop: `2px solid ${theme.palette.primary.main}`
    },
    dayTimeHour: {
      backgroundColor: theme.palette.primary.main,
      borderRadius: '50px',
      padding: '1rem 2rem',
      color: theme.palette.secondary.main,
      transform: 'translateY(-50%)'
    },
    dayTimeTitle: {
      fontSize: '3rem',
      margin: '0 2rem',
      color: (props: DayTimeItemProps): string =>
        props.dayTime.inDay ? theme.palette.primary.main : 'white'
    }
  })
);
const DayTimeItem: React.FC<DayTimeItemProps> = ({ dayTime, ...rest }) => {
  const { title, time } = dayTime;
  const classes = useStyles({ dayTime });
  return (
    <div {...rest}>
      <div className={classes.dayTimeItem}>
        <div className={classes.dayTimeTitle}>{title}</div>
        <div className={classes.dayTimeHour}>{time}</div>
      </div>
    </div>
  );
};
export default DayTimeItem;
