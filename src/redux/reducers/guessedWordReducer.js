import { GUESS_WORD, SET_SECRETWORD } from "../types";

const initialState = [];

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case GUESS_WORD:
      return [payload, ...state];
    case SET_SECRETWORD:
      return initialState;
    default:
      return state;
  }
};
