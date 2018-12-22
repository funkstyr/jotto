import { GUESS_WORD } from "../types";

const initialState = [];

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case GUESS_WORD:
      return [payload, ...state];
    default:
      return state;
  }
};
