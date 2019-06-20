import React from 'react'
import styled from 'styled-components'

const StyledHabitStreak = styled.div`
  background: ${props => props.color || '#5e6a7e'};
  margin-bottom: 25px;
  width: 100%;
  min-height: 30px;
`

const StyledHabitBar = styled.div`
  margin-bottom: 3.5px;
  margin-top: 3.5px;
  background: rgba(255, 255, 255, 0.3);
  height: 30px;
  box-shadow: 0px 0px 16px 1px rgba(27, 61, 84, 0.5);
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`

const StyledHabitStreakContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledHabitLabel = styled.label`
  position: sticky;
  left: 7px;
`
export default function HabitBar({ habit, lastSevenDays, days }) {
  function renderDay(day) {
    const currentDay = days.find(d => d.date === day)
    const currentHabit =
      currentDay && currentDay.habits.find(h => h.name === habit.name)
    const habitChosen = currentHabit && currentHabit.isChosen
    return (
      <StyledHabitStreakContainer key={day}>
        {habitChosen ? <StyledHabitStreak color={habit.color} /> : <div />}
      </StyledHabitStreakContainer>
    )
  }

  return (
    <div>
      <StyledHabitLabel forhtml={habit.name}>{habit.name}</StyledHabitLabel>
      <StyledHabitBar name={habit.name}>
        {lastSevenDays
          .slice()
          .reverse()
          .map(day => renderDay(day))}
      </StyledHabitBar>
    </div>
  )
}
