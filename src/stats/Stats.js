import React from 'react'
import MoodStat from './MoodStat'
import HabitStreak from './HabitStreaks'
import Calendar from './Calendar'

export default function Stats({ habits, mood, days }) {
  return (
    <>
      <Calendar />
      <MoodStat mood={mood} days={days} />
      <HabitStreak habits={habits} days={days} />
    </>
  )
}
