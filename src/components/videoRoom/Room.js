import React, { Component } from 'react';
import './room.css';

export class Room extends Component {
  render() {
    return (
      <div className="video-room">
      <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY" title='heloo'>
        </iframe>
        <div className="chat-box">
            <h1>Chat Box</h1>
        </div>
      </div>
    )
  }
}

export default Room
