import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import CustomLineChart from "./customLineChart";

let container = null;
const areaData1 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  }
];

const areaData2 = [
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  }
];

const areaData3 = [
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  }
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
    render(<CustomLineChart data={areaData1} />, container);
  });
  expect(container.textContent).toContain("Page A");

  act(() => {
    render(<CustomLineChart data={areaData2} />, container);
  });
  expect(container.textContent).toContain("Page B");

  act(() => {
    render(<CustomLineChart data={areaData3} />, container);
  });
  expect(container.textContent).toContain("Page C");
});
