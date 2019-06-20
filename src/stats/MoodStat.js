import styled from 'styled-components'
import React from 'react'
import { LineChart, Line, ResponsiveContainer, YAxis, Tooltip } from 'recharts'

const StyledMoodStat = styled.section`
  display: flex;
  flex-direction: column;
`
const StyledTitle = styled.label`
  position: fixed;
  left: 7px;
  font-size: 20px;
`
const StyledLineChart = styled.div`
  position: relative;
  margin-top: 0px;
  width: 100%;
  height: 180px;
`

export default function MoodStat({ days, lastSevenDays }) {
  const moodData = lastSevenDays
    .map(date => {
      const currentDay = days.find(day => day.date === date)
      return {
        date,
        mood: (currentDay && currentDay.mood) || 0,
      }
    })
    .reverse()

  return (
    <StyledMoodStat>
      <StyledTitle forhtml="moodLineChart">MOOD</StyledTitle>
      <StyledLineChart name="moodLineChart">
        <ResponsiveContainer height="100%" width="100%">
          <LineChart
            margin={{ top: 30, right: 25, left: -33, bottom: 15 }}
            data={moodData}
          >
            <Line type="monotone" dataKey="mood" stroke="#F1F5FA" yAxisId={0} />
            <YAxis
              axisLine={false}
              tickLine={false}
              ticks={[0, 50, 100]}
              tick={{ fill: 'white', fontSize: 12, dx: 18 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </StyledLineChart>
    </StyledMoodStat>
  )
}
// /*<Tooltip
//               labelStyle={{ color: '#889ab5' /*display: 'none'*/ }}
//               wrapperStyle={{ background: 'red' }}
//               itemStyle={{ color: '#889ab5' }}
//               labelFormatter={lastSevenDays.map(day => (
//                 <p style={{ fontSize: '23px', margin: '0px' }} key={day}>
//                   {moment(day)
//                     .format('dd')
//                     .substring(0, 1)}
//                 </p>
//               ))}
//             />
