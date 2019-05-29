import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import MoodSlider from './MoodSlider'
import HabitButton from './HabitButton'
import { postValue, getFromLocal, setToLocal } from '../services'

const StyledForm = styled.div`
  display: grid;
  justify-items: center;
`
export const createHabit = (data, history) => {
  postValue(data)
    .then(newHabit => {
      HabbitButtonList.setHabits([...HabbitButtonList.habits, newHabit])
      history.push('/')
    })
    .catch(error => console.log(error))
}

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
    const newHabits = [...habits]
    newHabits[index].isChoosen = !habits[index].isChoosen
    setHabits(newHabits)

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
          habit={habit} //why? ... habit in der arrow funktion steht (name) für ein einzelndes object in dem array - in der HabitButton Datei wird das weiter gegeben als prop {habit} um den namen aus dem objekt oben zu bekommen - the VALUE of HabitButton is one single object from the habits array called habit - this is how you get the Tag to have a meaning/value
          index={index} //the second parameter defines the index
          toggleHabbitChoosen={toggleHabbitChoosen} //führt die obere function toggleHabitChange
          key={habit.name}
          isChosen={habit.isChoosen}
        />
      ))}
    </StyledForm>
  )
}
