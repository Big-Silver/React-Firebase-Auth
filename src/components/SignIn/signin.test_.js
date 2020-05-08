import React from "react";
import renderer from "react-test-renderer";
import { render, unmountComponentAtNode } from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

import SignInPage from "./index";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a name", () => {
  act(() => {
    render(
      <MemoryRouter>
        <SignInPage />
      </MemoryRouter>,
      container
    );
  });
  expect(container.textContent).toBe("Email address");
});
