import React, { useState } from 'react'
import styled from 'styled-components'
import MoodSlider from './MoodSlider'
import HabitButton from './HabitButton'

const StyledForm = styled.body`
  display: grid;
  justify-items: center;
`

export default function Stats() {
  const [habits, setHabits] = useState([
    { name: 'EXERCISE', isChoosen: false },
    { name: 'SLEEP', isChoosen: false },
    { name: 'VITAMIN D', isChoosen: false },
    { name: 'JOURNAL', isChoosen: false },
    { name: 'SOCIAL', isChoosen: false },
    { name: 'NOURISHMENT', isChoosen: false },
  ])

  const toggleHabbitChoosen = index => {
    setHabits([
      ...habits.slice(0, index),
      { ...habits[index], isChoosen: !habits[index].isChoosen },
      ...habits.slice(index + 1),
    ])

    console.log(habits)
    // Save in LocalStorage - array in local storage packen - im anderen view die daten aus dem localstorage ziehen
  }

  return (
    <StyledForm>
      <h2>SOUL OUTION</h2>
      <MoodSlider />
      <p>Maintained your habits?</p>
      {habits.map((habit, index) => {
        return (
          <HabitButton
            habit={habit}
            index={index}
            toggleHabbitChoosen={toggleHabbitChoosen}
          />
        )
      })}
    </StyledForm>
  )
}
