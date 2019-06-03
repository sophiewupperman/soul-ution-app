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

export default function MoodStat({ moods, moodValue, dateToday /*prevMood*/ }) {
  // const prevMood = [...mood]

  return (
    <StyledMoodStat>
      <StyledTitle>MOOD</StyledTitle>
      <StyledLineChart>
        <LineChart
          width={400}
          height={145}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          data={[
            { mood: moods },
            /*moods.map(mood => {
              return { mood }
            }),*/
          ]}
        >
          <XAxis type="number" dataKey={dateToday} name="date" unit="cm" />
          <YAxis type="number" dataKey={moodValue} name="mood" />
          <Line type="monotone" dataKey="mood" stroke="#F1F5FA" yAxisId={0} />
        </LineChart>
      </StyledLineChart>
    </StyledMoodStat>
  )
}
