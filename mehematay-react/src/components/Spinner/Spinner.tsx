import { CircularProgress } from '@mui/material';



const Spinner = ({ spinnerOn }): JSX.Element => {
  if (!spinnerOn) {
    return <div />;
  }
  return (
    <div style={{position: 'fixed',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      backgroundColor: '#ffffff6b',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 10000}}>
      <CircularProgress />
    </div>
  );
};

export default Spinner;
