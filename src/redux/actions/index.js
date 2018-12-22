import axios from "axios";

import { CORRECT_GUESS, GUESS_WORD, SET_SECRETWORD } from "../types";
import { getLetterMatchCount, getRandomWord } from "../helpers";

export const correctGuess = () => {
  return { type: CORRECT_GUESS };
};

export const guessWord = word => (dispatch, getState) => {
  const secretWord = getState().secretWord;
  const matchCount = getLetterMatchCount(word, secretWord);

  dispatch({
    type: GUESS_WORD,
    payload: {
      word,
      matchCount
    }
  });

  if (word === secretWord)
    dispatch({
      type: CORRECT_GUESS
    });
};

export const setSecretWord = () => async dispatch => {
  let resp;

  try {
    resp = await axios.get(
      `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=YOURAPIKEY`
    );

    const payload = resp.status === 200 ? resp.data : getRandomWord();

    dispatch({
      type: SET_SECRETWORD,
      payload
    });
  } catch (error) {
    dispatch({
      type: SET_SECRETWORD,
      payload: getRandomWord()
    });
  }
};
