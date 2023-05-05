import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import {getStoreInstance} from './sdk';
import App from './App.tsx'

const store = getStoreInstance();

if (window.cordova) {
  document.addEventListener('deviceready', () => {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>,
    )
  }, false);
} else {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  )
}