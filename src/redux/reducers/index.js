import { combineReducers } from 'redux';

import success from './successReducer';
import guessedWords from './guessedWordReducer'

export default combineReducers({
    success,
    guessedWords
})