import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setSecretWord } from "../../redux/actions";

// TODO: pass success through mapStateToProps
// create reset action => call setSecretWord, clears wordList, sets success to false

export class Congrats extends React.Component {
  render() {
    const { success, setSecretWord } = this.props;

    const content = (
      <div>
        <span className="alert alert-success" data-test="congrats-message">
          Congrats
        </span>

        <button onClick={() => setSecretWord()} data-test="congrats-reset">
          Reset
        </button>
      </div>
    );

    return <div data-test="component-congrats">{success ? content : null}</div>;
  }
}

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default connect(
  null,
  { setSecretWord }
)(Congrats);
