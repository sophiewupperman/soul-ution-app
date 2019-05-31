import React from 'react'
import MoodStat from './MoodStat'
import HabitStreak from './HabitStreaks'
import Calendar from './Calendar'

export default function Stats({ habits, mood, day }) {
  return (
    <>
      <Calendar />
      <MoodStat mood={mood} day={day} />
      <HabitStreak habits={habits} day={day} />
    </>
  )
}
