import checkPropTypes from 'check-prop-types'

export const findbyTestAttribute = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
}

export const checkProps = (component, expectedProps) => {
    const propError = checkPropTypes(component.propTypes, expectedProps, 'prop', component.name);
    expect(propError).toBeUndefined();
}