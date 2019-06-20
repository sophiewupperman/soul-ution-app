import React from 'react'
import styled from 'styled-components'

const StyledButttonForm = styled.div`
  display: grid;
  justify-items: center;
`

const StyledHabitButton = styled.button`
  background-color: ${props => (props.active ? ' transparent' : '#f1f5fa')};
  border: none;
  border-radius: 50px;
  color: ${props => (props.active ? '#f1f5fa' : '#7795c3bd')};
  width: 200px;
  height: 40px;
  margin: 10px;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  border: ${props => (props.active ? '2px solid #f1f5fa' : 'none')};
  box-shadow: ${props =>
    props.active ? 'none' : ' 0px 5px 4px -6px rgba(27,61,84,0.51)'};
`

const HabitButton = ({
  days,
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
