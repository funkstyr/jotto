import { CORRECT_GUESS, SET_SECRETWORD } from "../types";

const initialState = false;

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case CORRECT_GUESS:
      return true;
    case SET_SECRETWORD:
      return initialState;
    default:
      return state;
  }
};
