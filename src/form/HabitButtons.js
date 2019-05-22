import React from 'react'
import styled from 'styled-components'

const StyledHabitButton = styled.button`
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;

  &.active {
    background: plum;
    color: white;
  }
`

export default function HabitButtons() {
  return (
    <div>
      <StyledHabitButton /*onClick={this./*handel...>}*/>
        EXERCISE
      </StyledHabitButton>
      <StyledHabitButton /*onClick={this./*handel...>}*/>
        SLEEP
      </StyledHabitButton>
      <StyledHabitButton /*onClick={this./*handel...>}*/>
        VITAMIN D
      </StyledHabitButton>
      <StyledHabitButton /*onClick={this./*handel...>}*/>
        JOURNAL
      </StyledHabitButton>
      <StyledHabitButton /*onClick={this./*handel...>}*/>
        SOCIAL
      </StyledHabitButton>
      <StyledHabitButton /*onClick={this./*handel...>}*/>
        NOURISHMENT
      </StyledHabitButton>
    </div>
  )
}
