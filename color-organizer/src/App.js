import React, { Component } from 'react';
import AddColorForm from "./AddColorForm";
import './App.css';

class App extends Component {
  render() {
    return (
      <AddColorForm onNewColor={(title, color) => {
        console.log(`${title} - ${color}`)
      }} />
    );
  }
}

export default App;
