import React, { Component } from 'react';
import { setStorageItem } from '../../utils/localStorage';

import './style.css';
import twitterLogo from '../../images/twitter-logo.png';

export default class Login extends Component {
  state = {
    'username': '',
  };

  handleInputChange = (ev) => {
    this.setState({ username: ev.target.value });
  }

  handleSubmitForm = (ev) => {
    ev.preventDefault();

    const { username } = this.state;

    if (!username.length) {
      return;
    }

    setStorageItem('username', username);

    this.props.history.push('/timeline');
  }

  render() {
    const { username } = this.state;

    return (
      <div className="row">
        <div className="offset-md-4 col-md-4 login-wrapper">
          <img src={twitterLogo} alt="OmniTwitter" className="twitter-logo" />
          <form onSubmit={this.handleSubmitForm}>
            <div className="form-group">
              <input className="form-control" 
                placeholder="Username"
                value={username}
                onChange={this.handleInputChange}
              />
              <button className="btn btn-block btn-primary mt-3" type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
