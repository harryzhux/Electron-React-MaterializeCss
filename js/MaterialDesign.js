'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import DropDownMenu from './DropDownMenu.js';
import FixedActionButton from './FixedActionButton.js';
import NavbarTabs from './NavbarTabs.js';
import FloatActionButton from './FloatActionButton.js';
import Modal from './Modal.js';

class MaterialDesign extends React.Component {
  render() {
    return (
      <div className="container">
          <DropDownMenu />
          <img src="../images/NetworkComputer.png" />
          <FloatActionButton />

	  <NavbarTabs />

	  <Modal />


      </div>
    );
  }
}

export default MaterialDesign;
