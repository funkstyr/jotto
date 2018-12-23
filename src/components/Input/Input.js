import React from "react";
import { connect } from "react-redux";

import { guessWord } from "../../redux/actions";

export class Input extends React.Component {
  state = {
    guess: ""
  };

  onChangeInput = e => {
    this.setState({ guess: e.target.value.toLowerCase() });
  };

  onClickSubmit = e => {
    e.preventDefault();

    if (this.state.guess.length) {
      this.props.guessWord(this.state.guess);
      this.setState({ guess: "" });
    }
  };

  render() {
    const { success } = this.props;

    const contents = success ? null : (
      <form className="form-inline">
        <input
          className="mb-s mx-sm-3 form-control"
          id="word-guess"
          type="text"
          placeholder="enter guess"
          data-test="input-field"
          onChange={this.onChangeInput}
          value={this.state.guess}
        />
        <button
          className="btn btn-primary"
          type="submit"
          data-test="input-submit"
          onClick={this.onClickSubmit}
        >
          Submit
        </button>
      </form>
    );

    return <div data-test="component-input">{contents}</div>;
  }
}

/* istanbul ignore next */
const mapStateToProps = ({ success }) => {
  return {
    success
  };
};

export default connect(
  mapStateToProps,
  { guessWord }
)(Input);
