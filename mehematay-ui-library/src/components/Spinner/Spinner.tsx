import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: '#ffffff6b',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10000
    }
  })
);

const Spinner = ({ spinnerOn }): JSX.Element => {
  const classes = useStyles();
  if (!spinnerOn) {
    return <div />;
  }
  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};

export default Spinner;
