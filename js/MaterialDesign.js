'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import DropDownMenu from './DropDownMenu.js';
import FixedActionButton from './FixedActionButton.js';
import NavbarTabs from './NavbarTabs.js';
import FloatActionButton from './FloatActionButton.js';
import Modal from './Modal.js';
import Slider from './Slider';

class MaterialDesign extends React.Component {
  render() {
    return (
      <div className="container">
          <DropDownMenu />
	  <NavbarTabs />
          <Slider />
          <FloatActionButton />
	  <Modal />
      </div>
    );
  }
}

export default MaterialDesign;
