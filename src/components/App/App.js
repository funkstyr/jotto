import React, { Component } from 'react';

import './App.css';
import Congrats from '../Congrats/Congrats';
import GuessedWords from '../GuessedWords/GuessedWords'

class App extends Component {
  render() {
    return (
      <div className="App container">
        <h1>Jotto</h1>

        <Congrats success={false} />
        <GuessedWords guesses={[{word: 'train', matchCount: 3},]} />

      </div>
    );
  }
}

export default App;
