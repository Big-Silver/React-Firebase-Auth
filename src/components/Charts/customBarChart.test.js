import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import CustomBarChart from "./customBarChart";

let container = null;
const barData1 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
];

const barData2 = [
  {
    name: "Page B",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
];

const barData3 = [
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
];

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
    render(<CustomBarChart data={barData1} />, container);
  });
  expect(container.textContent).toContain("Page A");

  act(() => {
    render(<CustomBarChart data={barData2} />, container);
  });
  expect(container.textContent).toContain("Page B");

  act(() => {
    render(<CustomBarChart data={barData3} />, container);
  });
  expect(container.textContent).toContain("Page C");
});
