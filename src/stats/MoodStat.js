import styled from 'styled-components'
import React from 'react'
import { LineChart, Line, XAxis, YAxis } from 'recharts'

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

export default function MoodStat({ moods, date /*prevMood*/ }) {
  // const prevMood = [...mood]

  return (
    <StyledMoodStat>
      <StyledTitle>MOOD</StyledTitle>
      <StyledLineChart>
        <LineChart
          width={400}
          height={145}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          data={67}
        >
          <XAxis type="number" dataKey={date} name="date" unit="cm" />
          <YAxis type="number" dataKey={moods} name="mood" />
          <Line type="monotone" dataKey="mood" stroke="#F1F5FA" yAxisId={0} />
        </LineChart>
      </StyledLineChart>
    </StyledMoodStat>
  )
}
