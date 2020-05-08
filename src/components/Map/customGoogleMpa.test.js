import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import CustomGoogleMap from "./customGoogleMap";

let container = null;
const mapPos = {
  lat: -34.397,
  lng: 150.644,
};

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
    render(<CustomGoogleMap data={mapPos} />, container);
  });
  expect(container.textContent).toContain("You're in -34.397 : 150.644");
});
