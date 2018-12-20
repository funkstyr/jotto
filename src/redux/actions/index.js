import { CORRECT_GUESS } from '../types';


export const correctGuess = () => {
    return { type: CORRECT_GUESS };
}

export const guessWord = (word) => (dispatch, getState) => {

}