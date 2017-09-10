'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
  _handleClick() {
    $('#modal1').modal();
  }
  render() {
    return (
      <div>
<a className="waves-effect waves-light btn modal-trigger" href="#modal1" onClick={this._handleClick}>Modal</a>

  <div id="modal1" className="modal">
    <div className="modal-content">
      <h4>Modal Header</h4>
      <p>A bunch of text</p>
    </div>
    <div className="modal-footer">
      <a href="#!" className="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
    </div>
  </div>
      </div> 
    );
  }
}

export default Modal;
