import { GUESS_WORD } from '../types'

const initialState = null;

export default (state=initialState, {type, payload}={}) => {
    switch(type) {
        case GUESS_WORD:
            return true;
        default:
            return state;
    }
}