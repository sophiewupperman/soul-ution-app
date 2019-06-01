import React, { useEffect } from 'react'
import styled from 'styled-components'
import MoodSlider from './MoodSlider'
import HabitButton from './HabitButton'
import { setToLocal } from '../services'

const StyledForm = styled.div`
  display: grid;
  justify-items: center;
  gap: 10px;
  padding: 20px;
`

export default function Form({
  habits,
  toggleHabbitChosen,
  mood,
  handleMoodChange,
  days,
}) {
  useEffect(() => {
    setToLocal('days', days)
  }, [days])

  useEffect(() => {
    setToLocal('habits', habits)
  })

  useEffect(() => {
    setToLocal('mood', mood)
  })

  return (
    <StyledForm>
      <h1>SOUL OUTION</h1>
      <MoodSlider handleMoodChange={handleMoodChange} mood={mood} />
      <p>Maintained your habits?</p>
      {habits.map((habit, index) => (
        <HabitButton
          habit={habit} //why? ... habit in der arrow funktion steht (name) für ein einzelndes object in dem array - in der HabitButton Datei wird das weiter gegeben als prop {habit} um den namen aus dem objekt oben zu bekommen - the VALUE of HabitButton is one single object from the habits array called habit - this is how you get the Tag to have a meaning/value
          index={index} //the second parameter defines the index
          toggleHabbitChosen={toggleHabbitChosen} //führt die obere function toggleHabitChange
          key={habit.name}
          isChosen={habit.isChosen}
        />
      ))}
    </StyledForm>
  )
}
