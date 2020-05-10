import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

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

it("render without a data", () => {
  act(() => {
    render(<CustomBarChart />, container);
  });
  expect(container.textContent).toEqual("pvuv");
});

it("renders with a name", () => {
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

it("should render a barChart", () => {
  act(() => {
    render(<CustomBarChart />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"recharts-wrapper\\" style=\\"position: relative; cursor: default; width: 500px; height: 400px;\\"><svg class=\\"recharts-surface\\" width=\\"500\\" height=\\"400\\" viewBox=\\"0 0 500 400\\" version=\\"1.1\\">
        <defs>
          <clipPath id=\\"recharts13-clip\\">
            <rect x=\\"80\\" y=\\"20\\" height=\\"345\\" width=\\"330\\"></rect>
          </clipPath>
        </defs>
        <g class=\\"recharts-cartesian-grid\\">
          <g class=\\"recharts-cartesian-grid-horizontal\\">
            <line stroke-dasharray=\\"3 3\\" stroke=\\"#ccc\\" fill=\\"none\\" x=\\"80\\" y=\\"20\\" width=\\"330\\" height=\\"345\\" x1=\\"80\\" y1=\\"20\\" x2=\\"410\\" y2=\\"20\\"></line>
            <line stroke-dasharray=\\"3 3\\" stroke=\\"#ccc\\" fill=\\"none\\" x=\\"80\\" y=\\"20\\" width=\\"330\\" height=\\"345\\" x1=\\"80\\" y1=\\"365\\" x2=\\"410\\" y2=\\"365\\"></line>
          </g>
          <g class=\\"recharts-cartesian-grid-vertical\\">
            <line stroke-dasharray=\\"3 3\\" stroke=\\"#ccc\\" fill=\\"none\\" x=\\"80\\" y=\\"20\\" width=\\"330\\" height=\\"345\\" x1=\\"80\\" y1=\\"20\\" x2=\\"80\\" y2=\\"365\\"></line>
            <line stroke-dasharray=\\"3 3\\" stroke=\\"#ccc\\" fill=\\"none\\" x=\\"80\\" y=\\"20\\" width=\\"330\\" height=\\"345\\" x1=\\"410\\" y1=\\"20\\" x2=\\"410\\" y2=\\"365\\"></line>
          </g>
        </g>
        <g class=\\"recharts-layer recharts-cartesian-axis recharts-yAxis yAxis\\">
          <line class=\\"recharts-cartesian-axis-line\\" stroke=\\"#8884d8\\" width=\\"60\\" height=\\"345\\" x=\\"20\\" y=\\"20\\" fill=\\"none\\" x1=\\"80\\" y1=\\"20\\" x2=\\"80\\" y2=\\"365\\"></line>
          <g class=\\"recharts-cartesian-axis-ticks\\"></g>
        </g>
        <g class=\\"recharts-layer recharts-cartesian-axis recharts-yAxis yAxis\\">
          <line class=\\"recharts-cartesian-axis-line\\" stroke=\\"#82ca9d\\" width=\\"60\\" height=\\"345\\" x=\\"410\\" y=\\"20\\" fill=\\"none\\" x1=\\"410\\" y1=\\"20\\" x2=\\"410\\" y2=\\"365\\"></line>
          <g class=\\"recharts-cartesian-axis-ticks\\"></g>
        </g>
      </svg>
      <div class=\\"recharts-legend-wrapper\\" style=\\"position: absolute; width: 450px; height: auto; left: 20px; bottom: 5px;\\">
        <ul class=\\"recharts-default-legend\\" style=\\"padding: 0px; margin: 0px; text-align: center;\\">
          <li class=\\"recharts-legend-item legend-item-0\\" style=\\"display: inline-block; margin-right: 10px;\\"><svg class=\\"recharts-surface\\" width=\\"14\\" height=\\"14\\" style=\\"display: inline-block; vertical-align: middle; margin-right: 4px;\\" viewBox=\\"0 0 32 32\\" version=\\"1.1\\">
              <path stroke=\\"none\\" fill=\\"#8884d8\\" d=\\"M0,4h32v24h-32z\\" class=\\"recharts-legend-icon\\"></path>
            </svg><span class=\\"recharts-legend-item-text\\">pv</span></li>
          <li class=\\"recharts-legend-item legend-item-1\\" style=\\"display: inline-block; margin-right: 10px;\\"><svg class=\\"recharts-surface\\" width=\\"14\\" height=\\"14\\" style=\\"display: inline-block; vertical-align: middle; margin-right: 4px;\\" viewBox=\\"0 0 32 32\\" version=\\"1.1\\">
              <path stroke=\\"none\\" fill=\\"#82ca9d\\" d=\\"M0,4h32v24h-32z\\" class=\\"recharts-legend-icon\\"></path>
            </svg><span class=\\"recharts-legend-item-text\\">uv</span></li>
        </ul>
      </div>
      <div class=\\"recharts-tooltip-wrapper\\" style=\\"transform: translate(undefinedpx, undefinedpx); pointer-events: none; visibility: hidden; position: absolute; top: 0px;\\">
        <div class=\\"recharts-default-tooltip\\" style=\\"margin: 0px; padding: 10px; background-color: rgb(255, 255, 255); border: 1px solid #ccc; white-space: nowrap;\\">
          <p class=\\"recharts-tooltip-label\\" style=\\"margin: 0px;\\"></p>
        </div>
      </div>
    </div>"
  `);
});
