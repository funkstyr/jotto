import React from 'react'
import PropTypes from 'prop-types'

const GuessedWords = props => {
    return <div data-test="component-guessedwords" />
}

GuessedWords.propTypes = {
    guesses: PropTypes.arrayOf(
        PropTypes.shape({
            word: PropTypes.string.isRequired,
            matchCount: PropTypes.number.isRequired
        })
    ).isRequired
}

export default GuessedWords;