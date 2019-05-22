import React from 'react'
import styled from 'styled-components'
import MoodSlider from './MoodSlider'
import HabitButtons from './HabitButtons'

const StyledForm = styled.form`
  display: grid;
  gap: 10px;
  margin-bottom: 20px;
`

export default function Stats() {
  return (
    <StyledForm>
      <h2>Form</h2>
      <MoodSlider />
      <HabitButtons />
    </StyledForm>
  )
}
