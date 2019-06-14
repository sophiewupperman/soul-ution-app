import styled from 'styled-components'
import React from 'react'
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts'
const moment = require('moment')

const StyledMoodStat = styled.section`
  display: flex;
  flex-direction: column;
`
const StyledTitle = styled.label`
  position: fixed;
  left: 7px;
`
const StyledLineChart = styled.div`
  position: relative;
  margin-top: 0px;
  width: 100%;
  height: 170px;
`

export default function MoodStat({ days, lastSevenDays }) {
  const moodData = days.map(day => ({
    date: day.date,
    mood: day.mood,
  }))

  const moodTicks = lastSevenDays
    .slice()
    .reverse()
    .map(day =>
      moment(day)
        .format('DD/M')
        .substring(0, 5)
    )

  console.log(moodData.date)
  return (
    <StyledMoodStat>
      <StyledTitle forhtml="moodLineChart">MOOD</StyledTitle>
      <StyledLineChart name="moodLineChart">
        <ResponsiveContainer height="100%" width="100%">
          <LineChart
            margin={{ top: 30, right: 25, left: 25, bottom: 0 }}
            data={moodData}
          >
            <Line type="monotone" dataKey="mood" stroke="#F1F5FA" yAxisId={0} />
            <YAxis />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 5 }}
              ticks={lastSevenDays}
              interval={0}
              //axisLine={false}
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
// lastSevenDays
//                 .slice()
//                 .reverse()
//                 .map(day =>
//                   moment(day)
//                     .format('DD')
//                     .substring(0, 5)
//                 )
// //

// [
//   '2019-06-06',
//   '2019-06-07',
//   '2019-06-08',
//   '2019-06-09',
//   '2019-06-10',
//   '2019-06-11',
//   '2019-06-12',
// ]
