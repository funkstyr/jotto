import React from "react";
import PropTypes from "prop-types";

const GuessedWords = ({ guesses }) => {
  var content = (
    <div className="altert alter-success" data-test="guessedwords-instructions">
      Enter
    </div>
  );

  if (guesses.length) {
    const list = guesses.map(({ word, matchCount }) => {
      return (
        <tr data-test="guessedwords-guess" key={word}>
          <td>{word}</td>
          <td>{matchCount}</td>
        </tr>
      );
    });

    content = (
      <div data-test="guessedwords-list">
        <h3>Guessed Words</h3>

        <table className="table table-sm">
          <thead className="thead-light">
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
      </div>
    );
  }

  return <div data-test="component-guessedwords">{content}</div>;
};

GuessedWords.propTypes = {
  guesses: PropTypes.arrayOf(
    PropTypes.shape({
      word: PropTypes.string.isRequired,
      matchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
