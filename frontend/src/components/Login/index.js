import React, { Component } from 'react';

import './style.css';

import twitterLogo from '../../images/twitter-logo.png';

export default class Login extends Component {
  render() {
    return (
      <div className="row">
        <div className="offset-md-4 col-md-4 text-center" style={{marginTop: '20%'}}>
          <img src={twitterLogo} alt="OmniTwitter" className="twitter-logo" />
          <form>
            <div className="form-group">
              <input className="form-control" placeholder="username" />
              <button className="btn btn-block btn-primary mt-3" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
