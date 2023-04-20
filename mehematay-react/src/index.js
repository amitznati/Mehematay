import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import 'cordova_script';

if (window.cordova) {
    document.addEventListener('deviceready', () => {

        ReactDOM.render(
            <div>
                <App cordovaWork={true}/>
            </div>,
            document.getElementById('root')
        );
    }, false);
} else {
    ReactDOM.render(
        <div>
            <App />
        </div>,
        document.getElementById('root')
    );
}
