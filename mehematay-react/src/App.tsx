import {
  RouterProvider,
  createHashRouter
} from "react-router-dom";
import {ThemeProvider, CssBaseLine} from './components';

import Root from "./layout/root.jsx";
import Home from "./layout/home.jsx";
import About from "./layout/about.jsx";
import Spinner from "./layout/Spinner.jsx";
import DayTimes from "./screens/DayTimes/widget/DayTimes.connect.js";
import ShabatAlarm from './screens/ShabatAlarm/widget/ShabatAlarm.connect.js'
import React from "react";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/day-times',
        element: <DayTimes />,
      },
      {
        path: '/shabat-alarms',
        element: <ShabatAlarm />,
      }
    ]
  },

]);

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
declare global {
  interface Window { cordova: any; }
}
function App() {
  React.useEffect(() => {
    if (window.cordova && window.cordova.plugins.permissions) {
      const permissions = window.cordova.plugins.permissions;
      const error = () => {
        alert('Location permission is not turned on');
      };

      const success = ( status ) => {
        if( !status.hasPermission ) error();
        else {
          console.log('Location permission granted!');
        }
      };

      permissions.requestPermission(permissions.ACCESS_FINE_LOCATION, success, error);
      permissions.requestPermission(permissions.WAKE_LOCK, success, error);
    }
  },[]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      <Spinner />
      <RouterProvider router={router} />
    </ThemeProvider>

  )
}

export default App
