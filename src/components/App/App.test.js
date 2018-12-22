import React from "react";
import { shallow } from "enzyme";

import { App } from "./App";

const initialProps = {
  success: false,
  guessedWords: [],
  secretWord: ""
};

const setup = (props = {}) => {
  const setupProps = { ...initialProps, ...props };
  return shallow(<App {...setupProps} />);
};

it("renders without crashing", () => {
  const wrapper = setup();
  const component = wrapper.find("div.App");
  expect(component.length).toBe(1);
});

it("`setSecretWord` runs on mount", () => {
  const setSecretWordMock = jest.fn();
  const wrapper = setup({ setSecretWord: setSecretWordMock });

  wrapper.instance().componentDidMount();
  const callCount = setSecretWordMock.mock.calls.length;

  expect(callCount).toBe(1);
});
