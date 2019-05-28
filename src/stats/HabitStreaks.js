import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { fetchHabits, getFromLocal } from '../services'

const StyledHabitStreaks = styled.section`
  display: grid;
  gap: 10px;
  padding: 20px;
`

export default function HabitStreak() {
  const [habits, setHabits] = useState(getFromLocal('habits') || [])

  useEffect(() => {
    loadHabits('habits', habits)
  })

  function loadHabits() {
    fetchHabits()
      .then(data => setHabits(data))
      .catch(error => console.log(error))
  }

  return <StyledHabitStreaks />
}
