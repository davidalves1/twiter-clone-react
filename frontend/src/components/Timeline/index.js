import React, { Component } from 'react';

import { getStorageItem } from '../../utils/localStorage';
import tweetsService from '../../services/tweets';
import Tweet from './Tweet';

import './style.css';
import twitterLogo from '../../images/twitter-logo.png';

export default class Timeline extends Component {
  state = {
    newTweet: '',
    tweets: [],
  }

  async componentDidMount() {
    const tweetsResponse = await tweetsService.index();

    this.setState({ tweets: tweetsResponse.data })
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

    await tweetsService.store({content, author});

    this.setState({ newTweet: '' });
  }

  render() {
    const { newTweet, tweets } = this.state;
    console.log(tweets);
    
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

        <div className="col-md-12 mt-4">
          {tweets.map(tweet => (
            <Tweet 
              key={tweet._id}
              author={tweet.author}
              content={tweet.content}
              likes={tweet.likes} 
            />
          ))}
        </div>
      </div>
    );
  }
}
