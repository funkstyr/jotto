import { storeFactory } from '../../test/utils'
import { guessWord } from './actions'

// no guessed words, some guessed words x incorrect guess, correct guess
const secretWord = 'party';
const badGuess = 'train';
const guessedWords = [
    { word: 'agile', matchCount: 1 },
]

describe('guessWord action dispatcher', () => {
    describe('no words guessed', () => {
        let store;

        beforeEach(() => {
            store = storeFactory({secretWord})
        })

        it('incorrect guess', () => {
            store.dispatch(guessWord(badGuess));
            const newState = store.getState();
            const expectedSate = {
                secretWord,
                success: false,
                guessedWords: [
                    { word: badGuess, matchCount: 3 }
                ]
            };
            
            expect(newState).toEqual(expectedSate);
        })

        it('correct guess', () => {
            store.dispatch(guessWord(secretWord));
            const newState = store.getState();
            const expectedSate = {
                secretWord,
                success: true,
                guessedWords: [
                    { word: secretWord, matchCount: secretWord.length }
                ]
            };
            
            expect(newState).toEqual(expectedSate);
        })
    })

    describe('some words guessed', () => {
        let store;

        beforeEach(() => {
            store = storeFactory({secretWord, guessedWords})
        })

        it('incorrect guess', () => {
            store.dispatch(guessWord(badGuess));
            const newState = store.getState();
            const expectedSate = {
                secretWord,
                success: false,
                guessedWords: [
                    ...guessedWords,
                    { word: badGuess, matchCount: 3 }
                ]
            };
            
            expect(newState).toEqual(expectedSate);
        })

        it('correct guess', () => {
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
        })
    })
})