import React from 'react'
import HabitBar from './HabitBar'

export default function HabitStreak({ days, habits, lastSevenDays }) {
  return (
    <div>
      {habits.map(habit => (
        <HabitBar
          key={habit.name}
          habit={habit}
          lastSevenDays={lastSevenDays}
          days={days}
        />
      ))}
    </div>
  )
}
