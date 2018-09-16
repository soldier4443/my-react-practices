import React, { Component } from "react";
import "./App.css";
import UserList from "./components/UserList";
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <h3>Who are you?</h3>
        <UserList />
      </div>
    );
  }
}

export default App;
