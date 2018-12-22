import moxios from "moxios";

import { storeFactory } from "../../test/utils";
import { guessWord, correctGuess, setSecretWord } from "./actions";
import guessedWordReducer from "./reducers/guessedWordReducer";
import secretWordReducer from "./reducers/secretWordReducer";

// no guessed words, some guessed words x incorrect guess, correct guess
const secretWord = "party";
const badGuess = "train";
const guessedWords = [{ word: "agile", matchCount: 1 }];

describe("guessWord action dispatcher", () => {
  describe("no words guessed", () => {
    let store;

    beforeEach(() => {
      store = storeFactory({ secretWord });
    });

    it("incorrect guess", () => {
      store.dispatch(guessWord(badGuess));
      const newState = store.getState();
      const expectedSate = {
        secretWord,
        success: false,
        guessedWords: [{ word: badGuess, matchCount: 3 }]
      };

      expect(newState).toEqual(expectedSate);
    });

    it("correct guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedSate = {
        secretWord,
        success: true,
        guessedWords: [{ word: secretWord, matchCount: secretWord.length }]
      };

      expect(newState).toEqual(expectedSate);
    });
  });

  describe("some words guessed", () => {
    let store;

    beforeEach(() => {
      store = storeFactory({ secretWord, guessedWords });
    });

    it("incorrect guess", () => {
      store.dispatch(guessWord(badGuess));
      const newState = store.getState();
      const expectedSate = {
        secretWord,
        success: false,
        guessedWords: [...guessedWords, { word: badGuess, matchCount: 3 }]
      };

      expect(newState).toEqual(expectedSate);
    });

    it("correct guess", () => {
      store.dispatch(guessWord(secretWord));
      const newState = store.getState();
      const expectedSate = {
        secretWord,
        success: true,
        guessedWords: [
          ...guessedWords,
          { word: secretWord, matchCount: secretWord.length }
        ]
      };

      expect(newState).toEqual(expectedSate);
    });
  });
});

describe("correctGuess action dispatcher", () => {
  it("changes state to `true`", () => {
    const store = storeFactory();
    store.dispatch(correctGuess());
    const newState = store.getState().success;

    expect(newState).toBeTruthy();
  });
});

describe("setSecretWord action creator", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("adds word to state when response 200", async () => {
    const secretWord = "party";
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: secretWord
      });
    });

    await store.dispatch(setSecretWord());
    const newState = store.getState();
    expect(newState.secretWord).toBe(secretWord);
  });

  it("adds word to state when response 204", async () => {
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 204,
        response: secretWord
      });
    });

    await store.dispatch(setSecretWord());
    const newState = store.getState();
    expect(newState.secretWord.length).toBeGreaterThan(0);
  });

  it("adds word to state when response 404", async () => {
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 404,
        response: secretWord
      });
    });

    await store.dispatch(setSecretWord());
    const newState = store.getState();
    expect(newState.secretWord.length).toBeGreaterThan(0);
  });
});

describe("Reducer Defaults", () => {
  it("secretWord", () => {
    const reducer = secretWordReducer();
    expect(reducer).toEqual(null);
  });

  it("guessedWord", () => {
    const reducer = guessedWordReducer();
    expect(reducer).toEqual([]);
  });
});
