import React from 'react'
import MoodStat from './MoodStat'
import HabitStreak from './HabitStreaks'
import Calendar from './Calendar'
const moment = require('moment')

export default function Stats({ habits, days }) {
  const lastSevenDays = new Array(7).fill('').map((_, index) => {
    return moment()
      .subtract(index, 'days')
      .format('YYYY-MM-DD')
  })

  console.log(lastSevenDays)

  return (
    <>
      <Calendar lastSeventDays={lastSevenDays} />
      <MoodStat days={days} />
      <HabitStreak lastSeventDays={lastSevenDays} habits={habits} days={days} />
    </>
  )
}
