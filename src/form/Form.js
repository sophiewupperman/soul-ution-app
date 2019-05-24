import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MoodSlider from './MoodSlider'
import HabitButton from './HabitButton'
import { getFromLocal, setToLocal } from '../services'

const StyledForm = styled.div`
  display: grid;
  justify-items: center;
`

export default function HabbitButtonList() {
  const [habits, setHabits] = useState(
    getFromLocal('habits') || [
      { name: 'EXERCISE', isChoosen: false },
      { name: 'SLEEP', isChoosen: false },
      { name: 'VITAMIN D', isChoosen: false },
      { name: 'JOURNAL', isChoosen: false },
      { name: 'SOCIAL', isChoosen: false },
      { name: 'NOURISHMENT', isChoosen: false },
    ]
  )

  useEffect(() => {
    setToLocal('habits', habits)
  })

  const toggleHabbitChoosen = index => {
    setHabits([
      ...habits.slice(0, index),
      { ...habits[index], isChoosen: !habits[index].isChoosen },
      ...habits.slice(index + 1),
    ])

    console.log(habits)
    // Save in LocalStorage - array in local storage packen -> im anderen view die daten aus dem localstorage ziehen
  }

  return (
    <StyledForm>
      <h2>SOUL OUTION</h2>
      <MoodSlider />
      <p>Maintained your habits?</p>
      {habits.map((habit, index) => (
        <HabitButton
          habit={habit}
          index={index}
          toggleHabbitChoosen={toggleHabbitChoosen}
          key={habit.name}
          isChosen={habit.isChoosen}
        />
      ))}
    </StyledForm>
  )
}
