import React from 'react'
import MoodStat from './MoodStat'
import HabitStreak from './HabitStreaks'
import Calendar from './Calendar'

export default function Stats({ habits, mood }) {
  return (
    <>
      <Calendar />
      <MoodStat mood={mood} />
      <HabitStreak habits={habits} />
    </>
  )
}
