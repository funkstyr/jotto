import React from 'react';
import {shallow} from 'enzyme';

import {findbyTestAttribute, checkProps} from '../../../test/utils';
import GuessedWords from './GuessedWords';

const initialProps = { guesses: [] };
const propsWithList = { guesses: [
        {word: 'train', matchCount: 3},
        {word: 'agile', matchCount: 1},
        {word: 'party', matchCount: 5}
    ]
}

const setup = (props={}) => {
    const setupProps = { ...initialProps, ...props };
    return shallow(<GuessedWords {...setupProps} />);
}

describe('GuessedWords Component', () => {
    it('does not throw warning with expected props', () => {
        checkProps(GuessedWords, initialProps);
        checkProps(GuessedWords, {guesses: [{word: 'train', matchCount: 3}]});
    })

    it('does throw warning with unexpected props', () => {
        checkProps(GuessedWords, {}, false);
    })

    describe("with no words guessed", () => {
        let wrapper;

        beforeEach(() => {
            wrapper = setup(initialProps)
        })

        it('renders without error', () => {
            const component = findbyTestAttribute(wrapper, 'component-guessedwords');
            expect(component.length).toBe(1);
        })
        
        it('renders instructions to guess', () => {
            const instructions = findbyTestAttribute(wrapper, 'guessedwords-instructions');
            expect(instructions.text().length).not.toBe(0);
        })
    })

    describe("with words guessed", () => {
        let wrapper;

        beforeEach(() => {
            wrapper = setup(propsWithList)
        })

        it('renders without error', () => {
            const component = findbyTestAttribute(wrapper, 'component-guessedwords');
            expect(component.length).toBe(1);
        })

        it('renders list of guesses', () => {
            const list = findbyTestAttribute(wrapper, 'guessedwords-list');
            expect(list.length).toBe(1)
        })

        it('has correct number of guessed words', () => {
            const guesses = findbyTestAttribute(wrapper, 'guessedwords-guess');
            expect(guesses.length).toBe(propsWithList.guesses.length)
        })
    })
})