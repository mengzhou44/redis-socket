import React, { Component } from "react";

import ToastContainer from "./toast-container";

import "./App.css";

import { setupSockets, joinSocketServer } from './socket'; 

class App extends Component {
  constructor(props) {
    super(props);
    setupSockets();
  }
  render() {
    return (
      <div className="App">
        <button onClick={()=> joinSocketServer(5431)}>  Join </button>
        <ToastContainer />
      </div>
    );
  }
}

export default App;
