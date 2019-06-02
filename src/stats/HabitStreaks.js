import React from 'react'
import styled from 'styled-components'

const StyledHabitStreaks = styled.section`
  display: grid;
  position: absolute;
  right: 5px;
  top: 334px;
  z-index: 2;
`
const StyledHabitStreak = styled.div`
  background: ${props => (props.active ? '#5e6a7e' : 'none')};
  margin-bottom: 25px;
  min-width: 30px
    ${props => (props.active && props.dateYesterday ? '+40px' : 'none')};
  min-height: 30px;
  border-radius: 20px;
`

const StyledHabitBar = styled.div`
  margin-bottom: 3.5px;
  margin-top: 3.5px;
  background: #b6c1d0;
  width: 100vw;
  height: 30px;
`
const StyledHabitLabel = styled.label`
  position: sticky;
  left: 7px;
`

export default function HabitStreak({ habits }) {
  return (
    <div>
      <StyledHabitLabel forhtml="exercise">EXERCISE</StyledHabitLabel>
      <StyledHabitBar name="exercise" />
      <StyledHabitLabel forhtml="sleep">SLEEP</StyledHabitLabel>
      <StyledHabitBar name="sleep" />
      <StyledHabitLabel forhtml="vitamind">VITAMIN D</StyledHabitLabel>
      <StyledHabitBar name="vitamind" />
      <StyledHabitLabel forhtml="journal">JOURNAL</StyledHabitLabel>
      <StyledHabitBar name="journal" />
      <StyledHabitLabel forhtml="social">SOCIAL</StyledHabitLabel>
      <StyledHabitBar name="social" />
      <StyledHabitLabel forhtml="nourishment">NOURISHMENT</StyledHabitLabel>
      <StyledHabitBar name="nourishment" />
      <StyledHabitStreaks>
        {habits.map((habit, index) => {
          return (
            <StyledHabitStreak
              active={habit.isChosen}
              dateYesterday={habit.dateYesterday}
              value={habit}
              index={index}
              key={index}
            />
          )
        })}
      </StyledHabitStreaks>
    </div>
  )
}

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
