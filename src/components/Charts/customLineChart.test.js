import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import CustomLineChart from "./customLineChart";

let container = null;
const areaData1 = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
];

const areaData2 = [
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
];

const areaData3 = [
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
    render(<CustomLineChart />, container);
  });
  expect(container.textContent).toEqual("pvuv");
});

it("renders with a name", () => {
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

it("should render a lineChart", () => {
  act(() => {
    render(<CustomLineChart />, container);
  });

  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"recharts-wrapper\\" style=\\"position: relative; cursor: default; width: 500px; height: 400px;\\"><svg class=\\"recharts-surface\\" width=\\"500\\" height=\\"400\\" viewBox=\\"0 0 500 400\\" version=\\"1.1\\">
        <defs>
          <clipPath id=\\"recharts13-clip\\">
            <rect x=\\"80\\" y=\\"5\\" height=\\"360\\" width=\\"390\\"></rect>
          </clipPath>
        </defs>
        <g class=\\"recharts-cartesian-grid\\">
          <g class=\\"recharts-cartesian-grid-horizontal\\">
            <line stroke-dasharray=\\"3 3\\" stroke=\\"#ccc\\" fill=\\"none\\" x=\\"80\\" y=\\"5\\" width=\\"390\\" height=\\"360\\" x1=\\"80\\" y1=\\"5\\" x2=\\"470\\" y2=\\"5\\"></line>
            <line stroke-dasharray=\\"3 3\\" stroke=\\"#ccc\\" fill=\\"none\\" x=\\"80\\" y=\\"5\\" width=\\"390\\" height=\\"360\\" x1=\\"80\\" y1=\\"365\\" x2=\\"470\\" y2=\\"365\\"></line>
          </g>
          <g class=\\"recharts-cartesian-grid-vertical\\">
            <line stroke-dasharray=\\"3 3\\" stroke=\\"#ccc\\" fill=\\"none\\" x=\\"80\\" y=\\"5\\" width=\\"390\\" height=\\"360\\" x1=\\"80\\" y1=\\"5\\" x2=\\"80\\" y2=\\"365\\"></line>
            <line stroke-dasharray=\\"3 3\\" stroke=\\"#ccc\\" fill=\\"none\\" x=\\"80\\" y=\\"5\\" width=\\"390\\" height=\\"360\\" x1=\\"470\\" y1=\\"5\\" x2=\\"470\\" y2=\\"365\\"></line>
          </g>
        </g>
        <g class=\\"recharts-layer recharts-cartesian-axis recharts-yAxis yAxis\\">
          <line class=\\"recharts-cartesian-axis-line\\" width=\\"60\\" height=\\"360\\" x=\\"20\\" y=\\"5\\" stroke=\\"#666\\" fill=\\"none\\" x1=\\"80\\" y1=\\"5\\" x2=\\"80\\" y2=\\"365\\"></line>
          <g class=\\"recharts-cartesian-axis-ticks\\"></g>
        </g>
      </svg>
      <div class=\\"recharts-legend-wrapper\\" style=\\"position: absolute; width: 450px; height: auto; left: 20px; bottom: 5px;\\">
        <ul class=\\"recharts-default-legend\\" style=\\"padding: 0px; margin: 0px; text-align: center;\\">
          <li class=\\"recharts-legend-item legend-item-0\\" style=\\"display: inline-block; margin-right: 10px;\\"><svg class=\\"recharts-surface\\" width=\\"14\\" height=\\"14\\" style=\\"display: inline-block; vertical-align: middle; margin-right: 4px;\\" viewBox=\\"0 0 32 32\\" version=\\"1.1\\">
              <path stroke-width=\\"4\\" fill=\\"none\\" stroke=\\"#8884d8\\" d=\\"M0,16h10.666666666666666
                A5.333333333333333,5.333333333333333,0,1,1,21.333333333333332,16
                H32M21.333333333333332,16
                A5.333333333333333,5.333333333333333,0,1,1,10.666666666666666,16\\" class=\\"recharts-legend-icon\\"></path>
            </svg><span class=\\"recharts-legend-item-text\\">pv</span></li>
          <li class=\\"recharts-legend-item legend-item-1\\" style=\\"display: inline-block; margin-right: 10px;\\"><svg class=\\"recharts-surface\\" width=\\"14\\" height=\\"14\\" style=\\"display: inline-block; vertical-align: middle; margin-right: 4px;\\" viewBox=\\"0 0 32 32\\" version=\\"1.1\\">
              <path stroke-width=\\"4\\" fill=\\"none\\" stroke=\\"#82ca9d\\" d=\\"M0,16h10.666666666666666
                A5.333333333333333,5.333333333333333,0,1,1,21.333333333333332,16
                H32M21.333333333333332,16
                A5.333333333333333,5.333333333333333,0,1,1,10.666666666666666,16\\" class=\\"recharts-legend-icon\\"></path>
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
