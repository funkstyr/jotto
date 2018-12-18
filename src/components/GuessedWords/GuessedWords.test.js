import React from 'react';
import {shallow} from 'enzyme';

import {findbyTestAttribute, checkProps} from '../../../test/utils';
import GuessedWords from './GuessedWords';

const initialProps = { guesses: [{word: 'train', matchCount: 3}] };

const setup = (props={}) => {
    const setupProps = { ...initialProps, ...props };
    return shallow(<GuessedWords {...setupProps} />);
}

describe('GuessedWords Component', () => {
    it('renders without error', () => {
        const wrapper = setup();
        const component = findbyTestAttribute(wrapper, 'component-guessedwords');
        expect(component.length).toBe(1);
    })

    it('does not throw warning with expected props', () => {
        checkProps(GuessedWords, initialProps);
    })
})