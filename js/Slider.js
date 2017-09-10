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
      </li>
      <li>
        <img src="../images/LicenseAllocator.png" />
      </li>
      <li>
        <img src="../images/LicenseMonitor.png" />
      </li>
      <li>
        <img src="../images/NetworkComputer.png" />
      </li>
      <li>
        <img src="../images/WorkloadXelerator.png" />
      </li>
      <li>
        <img src="../images/HERO.png" />
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
