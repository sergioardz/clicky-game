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


  imageClick = event => {
    const currentChar = event.target.alt;
    const CharAlreadyClicked =
      this.state.clickedChar.indexOf(currentChar) > -1;


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
