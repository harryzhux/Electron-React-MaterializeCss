'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class NavbarTabs extends React.Component {
  render() {
    return (
          <div>
  <nav className="nav-extended">
    <div className="nav-wrapper">
      <a href="#" className="brand-logo">Logo</a>
      <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
      <ul className="side-nav" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
    <div className="nav-content">
      <ul className="tabs tabs-transparent">
        <li className="tab"><a href="#test1">Test 1</a></li>
        <li className="tab"><a className="active" href="#test2">Test 2</a></li>
        <li className="tab disabled"><a href="#test3">Disabled Tab</a></li>
        <li className="tab"><a href="#test4">Test 4</a></li>
      </ul>
    </div>
  </nav>
  <div id="test1" className="col s12">Test 1</div>
  <div id="test2" className="col s12">Test 2</div>
  <div id="test3" className="col s12">Test 3</div>
  <div id="test4" className="col s12">Test 4</div>
          </div>

    );
  }
}

export default NavbarTabs;
