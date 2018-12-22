import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";
import Congrats from "../Congrats/Congrats";
import GuessedWords from "../GuessedWords/GuessedWords";
import Input from "../Input/Input";
import { setSecretWord } from "../../redux/actions";

export class App extends Component {
  componentDidMount() {
    this.props.setSecretWord();
  }

  render() {
    const { success, guessedWords, secretWord } = this.props;

    return (
      <div className="App container">
        <h1>Jotto</h1>
        <p>Word: {secretWord}</p>
        <Congrats success={success} />
        <Input />
        <GuessedWords guesses={guessedWords} />
      </div>
    );
  }
}

/* istanbul ignore next */
const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state;

  return {
    success,
    guessedWords,
    secretWord
  };
};

export default connect(
  mapStateToProps,
  { setSecretWord }
)(App);
