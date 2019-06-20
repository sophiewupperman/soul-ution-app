import React from 'react'
import styled from 'styled-components'
import MoodSlider from './MoodSlider'
import HabitButton from './HabitButton'

const StyledForm = styled.div`
  display: grid;
  height: 100vh;
  justify-items: center;
  padding-bottom: 50px;
`

export default function Form({
  days,
  habits,
  toggleHabbitChosen,
  moodValue,
  handleMoodChange,
}) {
  return (
    <StyledForm days={days}>
      <h1>SOUL UTION</h1>
      <label forhtml="mood">How are you feeling today?</label>
      <p style={{ fontSize: 25, marginTop: 4, marginBottom: 0 }}>
        {moodValue}%
      </p>
      <MoodSlider handleMoodChange={handleMoodChange} moodValue={moodValue} />
      <p>Maintained your habits?</p>
      {habits &&
        habits.map((habit, index) => {
          return (
            <HabitButton
              habit={habit}
              index={index}
              toggleHabbitChosen={toggleHabbitChosen}
              key={habit.name}
              isChosen={habit.isChosen}
            />
          )
        })}
    </StyledForm>
  )
}
