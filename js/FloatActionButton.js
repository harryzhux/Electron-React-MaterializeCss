'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class FloatActionButton extends React.Component {
  render() {
    return (
          <div className="fixed-action-btn horizontal">
            <a href="#" className="btn-floating red btn-large"><i className="material-icons">mode_edit</i></a>
            <ul>
              <li><a href="#" className="btn-floating yellow btn-large"><i className="material-icons">insert_chart</i></a></li>
              <li><a href="#" className="btn-floating blue btn-large"><i className="material-icons">format_quote</i></a></li>
              <li><a href="#" className="btn-floating green btn-large"><i className="material-icons">publish</i></a></li>
              <li><a href="#" className="btn-floating orange btn-large"><i className="material-icons">attach_file</i></a></li>
            </ul>
          </div>

    );
  }
}

export default FloatActionButton;
