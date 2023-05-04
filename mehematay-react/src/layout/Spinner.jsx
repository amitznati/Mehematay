import React from 'react';
import { connect } from 'react-redux';
import { Spinner as MehemataySpinner } from '../components';

const Spinner = ({spinnerOn}) => {
  return <MehemataySpinner spinnerOn={spinnerOn} />;
}

const mapStateToProps = store => {
  return {
    spinnerOn: store.general.spinnerOn.length > 0,
    spinnerOptions: store.general.spinnerOptions,
  };
};


export default connect(mapStateToProps)(Spinner);