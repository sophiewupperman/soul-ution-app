import styled from 'styled-components'
import React from 'react'
import { LineChart, Line, XAxis, CartesianGrid, Tooltip } from 'recharts'

const StyledMoodStat = styled.section`
  display: grid;
  gap: 10px;
  padding: 20px;
`
const data = [
  {
    uv: 100,
    pv: 1000000,
    amt: 1000000,
  },
  {
    uv: 0,
    pv: 0,
    amt: 0,
  },
  {
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

export default function MoodStat() {
  return (
    <StyledMoodStat>
      <h2>MOOD</h2>
      <LineChart
        width={400}
        height={145}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
      </LineChart>
    </StyledMoodStat>
  )
}
