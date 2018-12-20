import { CORRECT_GUESS, GUESS_WORD } from '../types';
import { getLetterMatchCount } from '../helpers'


export const correctGuess = () => {
    return { type: CORRECT_GUESS };
}

export const guessWord = (word) => (dispatch, getState) => {
    const secretWord = getState().secretWord;
    const matchCount = getLetterMatchCount(word, secretWord);

    dispatch({
        type: GUESS_WORD,
        payload: {
            word,
            matchCount
        }
    });

    if(word === secretWord) dispatch({
        type: CORRECT_GUESS
    })

}