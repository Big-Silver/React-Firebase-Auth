import React from "react";
import renderer from "react-test-renderer";
import { render, unmountComponentAtNode } from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

import CustomAreaChart from "./customAreaChart";

let container = null;
const data1 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
];

const data2 = [
  {
    name: "Page B",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
];

const data3 = [
  {
    name: "Page C",
    uv: 4000,
    pv: 2400,
    amt: 2400,
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
    render(<CustomAreaChart data={data1} />, container);
  });
  expect(container.textContent).toContain("Page A");

  act(() => {
    render(<CustomAreaChart data={data2} />, container);
  });
  expect(container.textContent).toContain("Page B");
  
  act(() => {
    render(<CustomAreaChart data={data3} />, container);
  });
  expect(container.textContent).toContain("Page C");
});
