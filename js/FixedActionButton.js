'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class FixedActionButton extends React.Component {
  render() {
    return (
          <div className="fixed-action-btn toolbar" style={{position: 'absolute', display: 'inline-block'}}>
              <a className="btn-floating btn-large red">
                <i className="large material-icons">menu</i>
              </a>
              <ul>
                <li className="waves-effect waves-light blue"><a href="#!"><i className="material-icons">insert_chart</i>Chart</a></li>
                <li className="waves-effect waves-light gray"><a href="#!"><i className="material-icons">format_quote</i>Quote</a></li>
                <li className="waves-effect waves-light green"><a href="#!"><i className="material-icons">publish</i>Upload</a></li>
                <li className="waves-effect waves-light purple"><a href="#!"><i className="material-icons">attach_file</i>Attach</a></li>
              </ul>
            </div>
    );
  }
}

export default FixedActionButton;
