import React from 'react';
import PropTypes from 'prop-types';

const Congrats = ({success}) => {

    return (
        <div data-test="component-congrats">
            {success ? <span data-test="congrats-message">Congrats</span> : null}
        </div>
    )
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrats;