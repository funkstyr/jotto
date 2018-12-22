import { CORRECT_GUESS } from "../types";

const initialState = false;

export default (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case CORRECT_GUESS:
      return true;
    default:
      return state;
  }
};
