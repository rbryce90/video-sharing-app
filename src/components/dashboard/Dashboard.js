import React, { Component } from "react";
import {Link} from 'react-router-dom';
import "./dashboard.css";

let videosFnc = () => {
  let id = 1;
  let arr = [];
  for(let i = 0; i < 23; i++){
    let obj = {};
    obj["id"] = id; 
    obj["img"] = "https://boygeniusreport.files.wordpress.com/2016/05/scared-surprised-cat-face.jpg";
    obj["title"] = `title ${id}`;
    obj["description"] = "This is a description, This is a description, This is a description, This is a description, This is a description, This is a description, This is a description, This is a description, This is a description, This is a description, This is a description.";
    obj['creator'] = "Jim"
    arr.push(obj);
    id++
  }
  console.log(arr)
  return arr
}

export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      videos:videosFnc(),
  }
}

  render() {
    const { videos } = this.state;
    console.log(videos)
    let mappedCards = videos.map(video => {
      return (
        <div className="dashboard-card">
          <Link to={`/room/${video.creator}`}>
            <img src={video.img} alt="" />
            <h3>{video.title}</h3>
            <h4>{video.creator}</h4>
          </Link>
        </div>
      );
    });

    return <div className="dashboard">
      <h1>New Videos</h1>
      <div className="dashboard-cards">
      {mappedCards}
      </div>
    </div>
    
  }
}

