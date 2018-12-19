import React from 'react';
import { shallow } from 'enzyme';

import { findbyTestAttribute } from '../../../test/utils';
import { Input } from './Input';

const initialState = { success: false }
const guessesState = { success: true }

const setup = (state=initialState) => {
    return shallow(<Input {...state} />)
}

describe('Input Component', () => {

    describe('renders', () => {
        describe('without guesses', () => {
            let wrapper;

            beforeEach(() => {
                wrapper = setup();
            })

            it('without error', () => {
                const component = findbyTestAttribute(wrapper, 'component-input');
                expect(component.length).toBe(1);
            })

            it('input rendered', () => {
                const component = findbyTestAttribute(wrapper, 'input-field');
                expect(component.length).toBe(1);
            })

            it('submit button rendered', () => {
                const component = findbyTestAttribute(wrapper, 'input-submit');
                expect(component.length).toBe(1);
            })
        })

        describe('with correct guess', () => {
            let wrapper;

            beforeEach(() => {
                wrapper = setup(guessesState);
            })
            it('without error', () => {
                const component = findbyTestAttribute(wrapper, 'component-input');
                expect(component.length).toBe(1);
            })

            it('input rendered', () => {
                const component = findbyTestAttribute(wrapper, 'input-field');
                expect(component.length).toBe(0);
            })

            it('submit button rendered', () => {
                const component = findbyTestAttribute(wrapper, 'input-submit');
                expect(component.length).toBe(0);
            })
        })
    })

    describe('updates state', () => {
        it('', () => {
    
        })
    })
})