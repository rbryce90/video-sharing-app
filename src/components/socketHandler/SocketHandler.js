import React, { Component } from "react";
import socketIO from "socket.io-client";
const socket = socketIO("http://localhost:4000");

export class SocketHandler extends Component {
  constructor() {
    super();
    this.state = {};
    socket.on("news", function(data) {
      console.log(data);
      socket.emit("my other event", { my: "data" });
    });
  }

  render() {
    return <div>This is my Sockets stuff </div>;
  }
}

export default SocketHandler;
