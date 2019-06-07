import styled from 'styled-components'
import React from 'react'
import { LineChart, Line, ResponsiveContainer } from 'recharts'

const StyledMoodStat = styled.section`
  display: flex;
  flex-direction: column;
`
const StyledTitle = styled.h2`
  position: fixed;
  left: 7px;
`
const StyledLineChart = styled.div`
  position: relative;
  margin-top: 30px;
  margin-bottom: 50px;
  width: 100%;
  height: 150px;
`

export default function MoodStat({ days }) {
  const moodData = days.map(day => ({
    date: day.date,
    mood: day.mood,
  }))

  return (
    <StyledMoodStat>
      <StyledTitle>MOOD</StyledTitle>
      <StyledLineChart>
        <ResponsiveContainer>
          <LineChart
            width={{ top: 5, right: 20, left: 10, bottom: 5 }}
            data={moodData}
          >
            <Line type="monotone" dataKey="mood" stroke="#F1F5FA" yAxisId={0} />
          </LineChart>
        </ResponsiveContainer>
      </StyledLineChart>
    </StyledMoodStat>
  )
}
