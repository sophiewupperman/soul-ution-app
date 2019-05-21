import styled from "styled-components";
import React, { PureComponent } from "react";
import { LineChart, Line } from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

class LineGraph extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/exh283uh/";

  render() {
    return (
      <LineChart width={300} height={100} data={data}>
        <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    );
  }
}

const StyledMoodStat = styled.section`
  display: grid;
  gap: 10px;
  padding: 20px;
`;

export default function MoodStat() {
  return (
    <StyledMoodStat>
      <h2>MOOD</h2>
      <LineGraph />
    </StyledMoodStat>
  );
}
