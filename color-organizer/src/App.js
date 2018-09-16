import React, { Component } from "react";
import AddColorForm from "./AddColorForm";
import ColorList from "./ColorList";
import { v4 } from "uuid";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    };
  }

  addNewColor = (title, color) => {
    this.setState(prevState => ({
      colors: [
        ...prevState.colors,
        {
          id: v4(),
          title,
          color,
          rating: 0
        }
      ]
    }));
  };

  rateColor = (colorId, rating) => {
    this.setState(prevState => ({
      colors: prevState.colors.map(
        color =>
          color.id !== colorId
            ? color
            : {
                ...color,
                rating: rating
              }
      )
    }));
  };

  removeColor = colorId => {
    this.setState(prevState => ({
      colors: prevState.colors.filter(color => color.id !== colorId)
    }));
  };

  render() {
    const { colors } = this.state;
    return (
      <div className="app">
        <AddColorForm onNewColor={this.addNewColor} />
        <ColorList
          colors={colors}
          onRate={this.rateColor}
          onRemove={this.removeColor}
        />
      </div>
    );
  }
}

export default App;
