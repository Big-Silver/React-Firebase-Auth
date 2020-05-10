import React from "react";
import renderer from "react-test-renderer";
import { render, unmountComponentAtNode } from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

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

it("render without a data", () => {
  act(() => {
    render(<CustomAreaChart />, container);
  });
  expect(container.textContent).toEqual("");
});

it("renders with a name", () => {
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

it("should render a areaChart", () => {
  act(() => {
    render(<CustomAreaChart />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"recharts-wrapper\\" style=\\"position: relative; cursor: default; width: 500px; height: 400px;\\"><svg class=\\"recharts-surface\\" width=\\"500\\" height=\\"400\\" viewBox=\\"0 0 500 400\\" version=\\"1.1\\">
        <defs>
          <clipPath id=\\"recharts9-clip\\">
            <rect x=\\"60\\" y=\\"10\\" height=\\"360\\" width=\\"410\\"></rect>
          </clipPath>
        </defs>
        <g class=\\"recharts-cartesian-grid\\">
          <g class=\\"recharts-cartesian-grid-horizontal\\">
            <line stroke-dasharray=\\"3 3\\" stroke=\\"#ccc\\" fill=\\"none\\" x=\\"60\\" y=\\"10\\" width=\\"410\\" height=\\"360\\" x1=\\"60\\" y1=\\"10\\" x2=\\"470\\" y2=\\"10\\"></line>
            <line stroke-dasharray=\\"3 3\\" stroke=\\"#ccc\\" fill=\\"none\\" x=\\"60\\" y=\\"10\\" width=\\"410\\" height=\\"360\\" x1=\\"60\\" y1=\\"370\\" x2=\\"470\\" y2=\\"370\\"></line>
          </g>
          <g class=\\"recharts-cartesian-grid-vertical\\">
            <line stroke-dasharray=\\"3 3\\" stroke=\\"#ccc\\" fill=\\"none\\" x=\\"60\\" y=\\"10\\" width=\\"410\\" height=\\"360\\" x1=\\"60\\" y1=\\"10\\" x2=\\"60\\" y2=\\"370\\"></line>
            <line stroke-dasharray=\\"3 3\\" stroke=\\"#ccc\\" fill=\\"none\\" x=\\"60\\" y=\\"10\\" width=\\"410\\" height=\\"360\\" x1=\\"470\\" y1=\\"10\\" x2=\\"470\\" y2=\\"370\\"></line>
          </g>
        </g>
        <g class=\\"recharts-layer recharts-cartesian-axis recharts-yAxis yAxis\\">
          <line class=\\"recharts-cartesian-axis-line\\" width=\\"60\\" height=\\"360\\" x=\\"0\\" y=\\"10\\" stroke=\\"#666\\" fill=\\"none\\" x1=\\"60\\" y1=\\"10\\" x2=\\"60\\" y2=\\"370\\"></line>
          <g class=\\"recharts-cartesian-axis-ticks\\"></g>
        </g>
      </svg>
      <div class=\\"recharts-tooltip-wrapper\\" style=\\"transform: translate(undefinedpx, undefinedpx); pointer-events: none; visibility: hidden; position: absolute; top: 0px;\\">
        <div class=\\"recharts-default-tooltip\\" style=\\"margin: 0px; padding: 10px; background-color: rgb(255, 255, 255); border: 1px solid #ccc; white-space: nowrap;\\">
          <p class=\\"recharts-tooltip-label\\" style=\\"margin: 0px;\\"></p>
        </div>
      </div>
    </div>"
  `);
});
