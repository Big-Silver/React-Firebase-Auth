import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import CustomGoogleMap from "./customGoogleMap";

let container = null;
const mapPos = {
  lat: -34.397,
  lng: 150.644,
};

const emptyPos = {
  lat: 0,
  lng: 0,
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

it("render without a data", () => {
  act(() => {
    render(<CustomGoogleMap data={emptyPos} />, container);
  });
  expect(container.textContent).toEqual("You're in 0 : 0");
});

it("renders with a name", () => {
  act(() => {
    render(<CustomGoogleMap data={mapPos} />, container);
  });
  expect(container.textContent).toContain("You're in -34.397 : 150.644");
});

it("should render a googleMap", () => {
  act(() => {
    render(<CustomGoogleMap data={mapPos} />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"h-100 mt-3\\">
      <p class=\\"text-center\\">You're in -34.397 : 150.644</p>
      <div style=\\"height: 100%;\\"></div>
    </div>"
  `);
});
