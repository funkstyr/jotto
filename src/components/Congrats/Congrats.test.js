import React from "react";
import { shallow } from "enzyme";

import { findbyTestAttribute, checkProps } from "../../../test/utils";
import { Congrats } from "./Congrats";

const initialProps = { success: false };
const setup = (props = {}) => {
  const setupProps = { ...initialProps, ...props };
  return shallow(<Congrats {...setupProps} />);
};

describe("Congrats Component", () => {
  it("renders without error", () => {
    const wrapper = setup();
    const component = findbyTestAttribute(wrapper, "component-congrats");
    expect(component.length).toBe(1);
  });

  it("does not throw warning with expected props", () => {
    checkProps(Congrats, initialProps);
  });

  it("renders no text when `success` is false", () => {
    const wrapper = setup();
    const component = findbyTestAttribute(wrapper, "congrats-message");
    expect(component.length).toBe(0);
  });

  it("renders non-empty message when `success` is true", () => {
    const wrapper = setup({ success: true });
    const message = findbyTestAttribute(wrapper, "congrats-message");
    expect(message.text().length).not.toBe(0);
  });

  it("resets word on button click", () => {
    const setSecretWordMock = jest.fn();
    const wrapper = setup({ success: true, setSecretWord: setSecretWordMock });

    const button = findbyTestAttribute(wrapper, "congrats-reset");
    expect(button.length).toBe(1);
    button.simulate("click");

    const callCount = setSecretWordMock.mock.calls.length;
    expect(callCount).toBe(1);
  });
});
