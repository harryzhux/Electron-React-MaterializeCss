'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App" style={{background:'url(images/NetworkComputer-Web-Banner-Images-1700-x-1000.jpg) no-repeat center fixed'}}>
        <div className="App-header">
	        <h1 className="orange-text center-align">
            Material Design in Action!
	        </h1>
        </div>
        <div className="container">
          <div className='dropdown'>
            <h3 className="grey-text">Dropdown Menu</h3>
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

          <div className="fixed-action-btn horizontal">
            <h3 className="grey-text">Fixed Action Button</h3>
            <a href="#" className="btn-floating red btn-large"><i className="material-icons">mode_edit</i></a>
            <ul>
              <li><a href="#" className="btn-floating yellow btn-large"><i className="material-icons">insert_chart</i></a></li>
              <li><a href="#" className="btn-floating blue btn-large"><i className="material-icons">format_quote</i></a></li>
              <li><a href="#" className="btn-floating green btn-large"><i className="material-icons">publish</i></a></li>
              <li><a href="#" className="btn-floating orange btn-large"><i className="material-icons">attach_file</i></a></li>
            </ul>
          </div>
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
          <h2>FLAT BUTTON</h2>
          <a href="#" className="waves-effect waves-teal btn-flat">Button</a>

          <h1>HELPERS</h1>
          <h2>Alignment</h2>
          <div className="left-align"><h5>This aligns to the left</h5></div>
          <div className="center-align"><h5>This aligns to the center</h5></div>
          <div className="right-align"><h5>This aligns to the right</h5></div>

          <h2>QUICK FLOATS</h2>
          <div className="left">Left Float</div>
          <div className="right">Right Float</div>

          <h2>CLEAR</h2>
          <div className="clearfix"></div>
        </div>
        <div className="App-footer">
	        <h2>
            &copy; 2017 Harry Zhu &lt;harryzhux@gmail.com&gt;
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
