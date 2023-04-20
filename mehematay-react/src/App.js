import React from 'react';
import {Provider} from 'react-redux';
import {CssBaseLine, ThemeProvider} from 'mehematay-ui-library';

import {getStoreInstance, getInstance} from './sdk';
import Layout from './layout';
import Spinner from './layout/Spinner';

const store = getStoreInstance();
if (process.env && process.env.NODE_ENV) {
  window.mehematay = {
    sdkInstance: getInstance(),
    store,
  };
}

const theme = {
  colors: {
    primary: '#8e3032',
    primaryDark: '#4b191a',
    primaryLight: '#9c6364',

    secondary: '#debb0b',
    secondaryDark: '#675603',
    secondaryLight: '#dbc76a',

    tertiary: '#79d239',
    tertiaryDark: '#2d6107',
    tertiaryLight: '#caecb3',
  }
};

export default function App() {
  React.useEffect(() => {
    if (window.cordova && window.cordova.plugins.permissions) {
      const permissions = window.cordova.plugins.permissions;
      const error = () => {
        alert('Location permission is not turned on');
      };

      const success = ( status ) => {
        if( !status.hasPermission ) error();
      };

      permissions.requestPermission(permissions.ACCESS_FINE_LOCATION, success, error);
    }
  });
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseLine />
        <Layout />
        <Spinner />
      </ThemeProvider>
    </Provider>
  );
}
