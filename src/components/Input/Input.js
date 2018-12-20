import React from 'react';
import { connect } from 'react-redux'

export class Input extends React.Component {
    render() {
        const contents = this.props.success ? null : (
            <form className="form-inline">
                <input className="mb-s mx-sm-3" id="word-guess" type="text" placeholder="enter guess" data-test="input-field" />
                <button className="btn btn-primary" type="submit" data-test="input-submit">Submit</button>
            </form>
        );

        return <div data-test="component-input">{contents}</div>
    }
}

/* istanbul ignore next */
const mapStateToProps = ({success}) => {
    return {
        success
    };
};

export default connect(mapStateToProps)(Input);