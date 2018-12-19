import checkPropTypes from 'check-prop-types'

export const findbyTestAttribute = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
}

export const checkProps = (component, expectedProps, pass=true) => {
    const propError = checkPropTypes(component.propTypes, expectedProps, 'prop', component.name);
    pass ? expect(propError).toBeUndefined() : expect(propError).toBeDefined();
}