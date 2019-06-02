import React from 'react'
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

const HabitButton = ({
  habit,
  toggleHabbitChosen,
  index,
  isChosen,
  todaysDate,
}) => {
  return (
    <StyledButttonForm>
      <StyledHabitButton
        active={isChosen} //das ist das argument für den parameter in background-color - die property die angespochen wird
        onClick={() => toggleHabbitChosen(index)}
        date={todaysDate}
      >
        {habit.name}
      </StyledHabitButton>
    </StyledButttonForm>
  )
}

export default HabitButton
