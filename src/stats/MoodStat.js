import styled from "styled-components";
import React, { PureComponent } from "react";
import { LineChart, Line } from "recharts";

const StyledMoodStat = styled.section`
  display: grid;
  gap: 10px;
  padding: 20px;
`;

export default function MoodStat() {
  return (
    <StyledMoodStat>
      <h2>MOOD</h2>
      <LineChart
        width={400}
        height={400}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
      </LineChart>
    </StyledMoodStat>
  );
}
