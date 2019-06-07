import React from 'react'
import HabitBar from './HabitBar'

//map mit toUpperCase()
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

/* function addNewDayHabit() {
    const yesterdaysHabits = yesterday.habits

    if (yesterdaysHabits.active) {
      return $("HabitStreak").css("width","calc(100% + 40px)")
    } else if (!yesterdaysHabits.active) {
      return habits
    }
  }*/

/*<StyledHabitStreaks>
{habits.map((habit, index) => {
  if (habit.isChosen) {
    return (
      <StyledHabitStreak
        active={habit.isChosen}
        value={habit}
        index={index}
        key={index}
      />
    )
  } else {
    return <div />
  }
})}
</StyledHabitStreaks>*/
