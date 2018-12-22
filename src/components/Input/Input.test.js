import React from "react";
import { shallow } from "enzyme";

import { findbyTestAttribute } from "../../../test/utils";
import { Input } from "./Input";

const initialState = { success: false };
const guessesState = { success: true };
const inputChangeWord = "Hello";

const setup = (props = {}) => {
  const setupProps = { ...initialState, ...props };
  return shallow(<Input {...setupProps} />);
};

describe("Input Component", () => {
  describe("renders", () => {
    describe("without guesses", () => {
      let wrapper;

      beforeEach(() => {
        wrapper = setup();
      });

      it("without error", () => {
        const component = findbyTestAttribute(wrapper, "component-input");
        expect(component.length).toBe(1);
      });

      it("input rendered", () => {
        const component = findbyTestAttribute(wrapper, "input-field");
        expect(component.length).toBe(1);
      });

      it("submit button rendered", () => {
        const component = findbyTestAttribute(wrapper, "input-submit");
        expect(component.length).toBe(1);
      });
    });

    describe("with correct guess", () => {
      let wrapper;

      beforeEach(() => {
        wrapper = setup(guessesState);
      });
      it("without error", () => {
        const component = findbyTestAttribute(wrapper, "component-input");
        expect(component.length).toBe(1);
      });

      it("input rendered", () => {
        const component = findbyTestAttribute(wrapper, "input-field");
        expect(component.length).toBe(0);
      });

      it("submit button rendered", () => {
        const component = findbyTestAttribute(wrapper, "input-submit");
        expect(component.length).toBe(0);
      });
    });

    it("updates state on input change", () => {
      const wrapper = setup();
      const input = findbyTestAttribute(wrapper, "input-field");
      input.simulate("change", { target: { value: inputChangeWord } });

      expect(wrapper.state().guess).toEqual(inputChangeWord.toLowerCase());
    });
  });

  describe("`guessWord` action", () => {
    let guessWorkMock;
    let wrapper;
    let button;

    beforeEach(() => {
      guessWorkMock = jest.fn();
      wrapper = setup({ guessWord: guessWorkMock });
      button = findbyTestAttribute(wrapper, "input-submit");
    });

    it("not called when submit clicked without guess", () => {
      button.simulate("click", { preventDefault() {} });

      const callCount = guessWorkMock.mock.calls.length;
      expect(callCount).toBe(0);
    });

    it("not called when submit clicked with guess", () => {
      const input = findbyTestAttribute(wrapper, "input-field");
      input.simulate("change", { target: { value: inputChangeWord } });
      button.simulate("click", { preventDefault() {} });

      const callCount = guessWorkMock.mock.calls.length;
      expect(callCount).toBe(1);
    });
  });
});
