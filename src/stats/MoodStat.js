import styled from 'styled-components'
import React from 'react'
import { LineChart, Line } from 'recharts'

const StyledMoodStat = styled.section`
  display: grid;
`
const StyledTitle = styled.h2`
  position: absolute;
  left: 7px;
`
const StyledLineChart = styled.div`
  position: relative;
  margin-top: 30px;
  margin-bottom: 50px;
`

export default function MoodStat({ mood }) {
  const data = [
    {
      mood: 0,
    },
    {
      mood: 0,
    },
    {
      mood: 100,
    },
    {
      mood: 80,
    },
    {
      mood: 50,
    },
    {
      mood: 70,
    },
    {
      mood: 60,
    },
    {
      mood: mood,
    },
  ]

  return (
    <StyledMoodStat>
      <StyledTitle>MOOD</StyledTitle>
      <StyledLineChart>
        <LineChart
          width={400}
          height={145}
          data={data}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <Line type="monotone" dataKey="mood" stroke="#F1F5FA" yAxisId={0} />
        </LineChart>
      </StyledLineChart>
    </StyledMoodStat>
  )
}
