import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setSecretWord } from "../../redux/actions";

export class Congrats extends React.Component {
  render() {
    const { success, setSecretWord } = this.props;

    const content = (
      <div>
        <span className="alert alert-success" data-test="congrats-message">
          Congrats
        </span>
      </div>
    );

    return (
      <div data-test="component-congrats">
        {success ? content : null}
        <button
          className="btn btn-primary"
          onClick={() => setSecretWord()}
          data-test="congrats-reset"
        >
          Reset
        </button>
      </div>
    );
  }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default connect(
  null,
  { setSecretWord }
)(Congrats);
