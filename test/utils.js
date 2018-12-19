import checkPropTypes from 'check-prop-types'
import { createStore, applyMiddleware } from 'redux'

import reducers from '../src/redux/reducers'
import {middlewares} from '../src/redux/store'

export const findbyTestAttribute = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
}

export const checkProps = (component, expectedProps, pass=true) => {
    const propError = checkPropTypes(component.propTypes, expectedProps, 'prop', component.name);
    pass ? expect(propError).toBeUndefined() : expect(propError).toBeDefined();
}

export const storeFactory = (state) => {
    return applyMiddleware(...middlewares)(createStore(reducers, state));
}