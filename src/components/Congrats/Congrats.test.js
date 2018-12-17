import React from 'react';
import {shallow} from 'enzyme';

import {findbyTestAttribute, checkProps} from '../../../test/utils'
import Congrats from './Congrats';

const initialProps = { success: false };
const setup = (props={}) => {
    const setupProps = { ...initialProps, ...props };

    return shallow(<Congrats {...setupProps} />);
}

describe('Congrats Component', () => {
    it('renders without error', () => {
        const wrapper = setup();
        const component = findbyTestAttribute(wrapper, 'component-congrats');
        expect(component.length).toBe(1);
    })

    it('does not throw warning with expected props', () => {
        checkProps(Congrats, initialProps);
    })

    it('renders not text when `success` is false', () => {
        const wrapper = setup();
        const component = findbyTestAttribute(wrapper, 'component-congrats');
        expect(component.text()).toBe('');
    })

    it('renders non-empty message when `success` is true', () => {
        const wrapper = setup({success: true});
        const message = findbyTestAttribute(wrapper, 'congrats-message');
        expect(message.text().length).not.toBe(0);
    })
})