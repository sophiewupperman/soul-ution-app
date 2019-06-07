import React from 'react'
import MoodStat from './MoodStat'
import HabitStreak from './HabitStreaks'
import Calendar from './Calendar'
import styled from 'styled-components'

const moment = require('moment')

const StyledStats = styled.section`
  display: flex;
  flex-direction: column;
`

export default function Stats({ habits, days }) {
  const lastSevenDays = new Array(7).fill('').map((_, index) => {
    return moment()
      .subtract(index, 'days')
      .format('YYYY-MM-DD')
  })

  return (
    <StyledStats>
      <Calendar lastSeventDays={lastSevenDays} />
      <MoodStat days={days} />
      <HabitStreak lastSevenDays={lastSevenDays} habits={habits} days={days} />
    </StyledStats>
  )
}
