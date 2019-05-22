import React from 'react'
import styled from 'styled-components'
import MoodSlider from './MoodSlider'
import HabitButtons from './HabitButtons'

const StyledForm = styled.body`
  display: grid;
  justify-items: center;
  gap: 10px;
  margin-bottom: ;
`

export default function Stats() {
  return (
    <StyledForm>
      <h2>SOUL OUTION</h2>
      <MoodSlider />
      <HabitButtons />
    </StyledForm>
  )
}
