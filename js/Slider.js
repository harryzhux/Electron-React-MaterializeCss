import React from "react";
import $ from 'jquery';

class Slider extends React.Component {
  componentDidMount() {
    // Jquery here $(...)...
    $('.slider').slider();
    $('.slider').slider('next');
  }

  render () {
    //setInterval(drawClock, 1000);
    return (
  <div className="slider">
    <ul className="slides">
      <li className="active">
        <img src="../images/FlowTracer.png" />
        <div className="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 className="light grey-text text-lighten-3">Here is our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="../images/LicenseAllocator.png" />
        <div className="caption left-align">
          <h3>This is our big Tagline!</h3>
          <h5 className="light grey-text text-lighten-3">Here is our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="../images/LicenseMonitor.png" />
        <div className="caption right-align">
          <h3>This is our big Tagline!</h3>
          <h5 className="light grey-text text-lighten-3">Here is our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="../images/NetworkComputer.png" />
        <div className="caption center-align">
          <h3>This is our big Tagline!</h3>
          <h5 className="light grey-text text-lighten-3">Here is our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="../images/WorkloadXelerator.png" />
        <div className="caption right-align">
          <h3>This is our big Tagline!</h3>
          <h5 className="light grey-text text-lighten-3">Here is our small slogan.</h5>
        </div>
      </li>
      <li>
        <img src="../images/HERO.png" />
        <div className="caption left-align">
          <h3>This is our big Tagline!</h3>
          <h5 className="light grey-text text-lighten-3">Here is our small slogan.</h5>
        </div>
      </li>
    </ul>
    <ul className="indicators">
      <li className="indicator-item active"></li>
      <li className="indicator-item"></li>
      <li className="indicator-item"></li>
      <li className="indicator-item"></li>
      <li className="indicator-item"></li>
      <li className="indicator-item"></li>
    </ul>
  </div>
    );
  }
}

export default Slider;
