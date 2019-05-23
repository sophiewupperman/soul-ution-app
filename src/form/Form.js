import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MoodSlider from './MoodSlider'
import HabitButton from './HabitButton'
import { getFromLocal, setToLocal } from '../services'

const StyledForm = styled.div`
  display: grid;
  justify-items: center;
`

export default function Stats() {
  const [habits, setHabits] = useState(
    getFromLocal() || [
      { name: 'EXERCISE', isChoosen: false /*key: '0'*/ },
      { name: 'SLEEP', isChoosen: false, key: '1' },
      { name: 'VITAMIN D', isChoosen: false /*key: '2'*/ },
      { name: 'JOURNAL', isChoosen: false /*key: '3'*/ },
      { name: 'SOCIAL', isChoosen: false /*key: '4'*/ },
      { name: 'NOURISHMENT', isChoosen: false /*key: '5'*/ },
    ]
  )
  /*const habitItems = habits.map((habit, index) => (
    // Only do this if items have no stable IDs
    <li key={index}>{habit.text}</li>
  ))*/

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
