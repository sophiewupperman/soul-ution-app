import React, { useState } from 'react'
import styled from 'styled-components'

const StyledButttonForm = styled.div`
  display: grid;
  justify-items: center;
`

const StyledHabitButton = styled.button`
  background-color: ${props => (props.active ? ' white' : '#889ab5')};
  border: none;
  border-radius: 20px;
  color: ${props => (props.active ? '#889ab5' : 'white')};
  width: 200px;
  height: 30px;
  margin: 10px;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
`

const HabitButton = ({ habit, toggleHabbitChoosen, index, isChosen }) => {
  return (
    <StyledButttonForm>
      <StyledHabitButton
        active={isChosen}
        onClick={() => toggleHabbitChoosen(index)}
      >
        {habit.name}
      </StyledHabitButton>
    </StyledButttonForm>
  )
}

export default HabitButton
