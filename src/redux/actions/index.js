import axios from 'axios';

import { CORRECT_GUESS, GUESS_WORD, SET_SECRETWORD } from '../types';
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

export const setSecretWord = () => async (dispatch) => {
    const resp = await axios.get('url');

    dispatch({
        type: SET_SECRETWORD,
        payload: resp.data
    })
}