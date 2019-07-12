import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import char from "./char.json";
import './App.css';

class App extends Component {
  state = {
    message: "Click an image to begin!",
    char: char,
    clickedChar: [],
    score: 0,
    topScore: 0
  };

  componentDidMount() {
  }

  // When an image is clicked the alt property is captured and stored in an array and away from the main array
  imageClick = event => {
    const currentChar = event.target.alt;
    const CharAlreadyClicked =
      this.state.clickedChar.indexOf(currentChar) > -1;

    // When an image that has already been clicked is hit again: the game is over, reset and the images re-ordered
    if (CharAlreadyClicked) {
      this.setState({
        char: this.state.char.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        message: "Wrong one! Try Again...",
        topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
        clickedChar: [],
        score: 0
      });

    // When a valid image is clicked the scores are updated and the images re-oredered
    } else {
      this.setState(
        {
          char: this.state.char.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedChar: this.state.clickedChar.concat(
            currentChar
          ),
          message: "Nicely done!",
          score: this.state.score + 1
        },

        // If the game continues until clicling on all 12 images without repeating any: a win message is displayed and the game resets
        () => {
          if (this.state.score === 12) {

            this.setState({
              char: this.state.char.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              message: "Great Job! You got all in order and you Won!",
              topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
              clickedChar: [],
              score: 0
            });
          }
        }
      );
    }
  };

  render () {
    return (
      <div>
        <Navbar 
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Header />
        <div className="wrapper">
        {this.state.char.map(char => (
            <Main
              imageClick={this.imageClick}
              id={char.id}
              key={char.id}
              image={char.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
