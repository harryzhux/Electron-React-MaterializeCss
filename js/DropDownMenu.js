'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class DropDownMenu extends React.Component {
  render() {
    return (
          <div className="dropdown left-align">
            <a className='dropdown-button btn' href='#' data-activates='dropdown1'>Drop Me! <i className="material-icons">menu</i></a>
            <ul id='dropdown1' className='dropdown-content'>
              <li><a href="#!"><i className="material-icons">mode_edit</i>Item One</a></li>
              <li><a href="#!"><i className="material-icons">insert_chart</i>Item Two</a></li>
              <li className="divider"></li>
              <li><a href="#!"><i className="material-icons">publish</i>Item Three</a></li>
              <li><a href="#!"><i className="material-icons">view_module</i>Item Four</a></li>
              <li><a href="#!"><i className="material-icons">cloud</i>Item Five</a></li>
            </ul>
          </div>

    );
  }
}

export default DropDownMenu;
