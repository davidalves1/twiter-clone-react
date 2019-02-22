import React, { Component } from 'react';
import { getStorageItem } from '../../utils/localStorage';
import api from '../../services/api';

import './style.css';
import twitterLogo from '../../images/twitter-logo.png';

export default class Timeline extends Component {
  state = {
    newTweet: ''
  }

  handleInputChange = ev => {
    this.setState({ newTweet: ev.target.value });
  }

  handleNewTweet = async ev => {
    if (ev.keyCode !== 13) {
      return;
    }

    const { newTweet: content } = this.state;
    const author = getStorageItem('username');

    await api.post('tweets', {content, author});

    this.setState({ newTweet: '' });
  }

  render() {
    const { newTweet } = this.state;
    
    return (  
      <div className="row">
        <div className="offset-md-3 col-md-6 new-tweet">
          <img src={twitterLogo} alt="OmniTwitter" className="twitter-logo" />
          <textarea 
            className="form-control"
            placeholder="O que você está pensando?"
            value={newTweet}
            onChange={this.handleInputChange}
            onKeyDown={this.handleNewTweet}
          />
        </div>
      </div>
    );
  }
}
