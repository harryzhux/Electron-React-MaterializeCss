require('../css/main.less');
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import logo from '../images/logo.svg';
import qr from '../images/qr.png';
import Loader from './Loader.js';
//import Slider from './Slider.js';
import MaterialDesign from './MaterialDesign.js';

class App extends React.Component {
  render() {
    let dt = new Date();
    let year = dt.getFullYear();
    return (
      <div className="App">
        <div className="App-header">
          <h2>
            <img src={logo} className="App-logo" alt="logo" />
            Electron - React - Material Design in Action!
          </h2>
        </div>
        <MaterialDesign />
        <div className="App-footer">
          <h2>
            &copy; {year} Harry Zhu &lt;harryzhux@gmail.com&gt;
            <img src={qr} className="App-qr" alt="QR" />
          </h2>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('content')
);
