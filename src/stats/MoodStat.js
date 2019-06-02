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

export default function MoodStat({ mood, moodValue, date /*prevMood*/ }) {
  // const prevMood = [...mood]

  return (
    <StyledMoodStat>
      <StyledTitle>MOOD</StyledTitle>
      <StyledLineChart>
        <LineChart
          width={400}
          height={145}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          data={mood.map(oneMood => (oneMood, date) => {
            return <point mood={oneMood} key={date} />
          })}
        >
          <Line type="monotone" dataKey="mood" stroke="#F1F5FA" yAxisId={0} />
        </LineChart>
      </StyledLineChart>
    </StyledMoodStat>
  )
}
