import React, { Component } from "react";
import Header from "./components/header/Header";
import SocketHandler from "./components/socketHandler/SocketHandler";
import Routes from "./components/routes/Routes";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default App;
