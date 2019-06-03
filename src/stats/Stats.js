import React from 'react'
import MoodStat from './MoodStat'
import HabitStreak from './HabitStreaks'
import Calendar from './Calendar'

export default function Stats({ habits, moods }) {
  return (
    <>
      <Calendar />
      <MoodStat moods={moods} />
      <HabitStreak habits={habits} />
    </>
  )
}
