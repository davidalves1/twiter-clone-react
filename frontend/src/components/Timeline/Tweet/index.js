import React, { Component } from 'react';

import './style.css';

export default class Tweet extends Component {
  render() {
    const { 
        props: {
            author,
            content,
            likes
        } 
    } = this;

    return (
        <div className="offset-md-3 col-md-6 tweet-wrap">
            <p className="author">{ author }:</p>
            <p className="content">{ content }</p>
            <div>
                <i style={{ cursor: 'pointer' }}>♥</i> <span>{likes}</span>    
            </div>
        </div>
    );
  }
}
