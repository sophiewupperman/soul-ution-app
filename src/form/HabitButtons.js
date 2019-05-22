import React, { Component } from 'react'
import styled from 'styled-components'

const StyledButttonForm = styled.div`
  display: grid;
  justify-items: center;
`

const StyledHabitButton = styled.button`
  background-color: #889ab5;
  border: none;
  border-radius: 20px;
  color: white;
  width: 200px;
  height: 30px;
  margin: 20px;
  text-align: center;
  text-decoration: none;
  font-size: 20px;

  &.active {
    background: white;
    color: #889ab5;
  }
`

export default class HabitButtons extends Component {
  state = {
    active: false,
  }

  handleClick = () => {
    this.setState({
      active: !this.state.active,
    })
  }

  habits = [
    'EXERCISE',
    'SLEEP',
    'VITAMIN D',
    'JOURNAL',
    'SOCIAL',
    'NOURISHMENT',
  ]

  render() {
    const className = this.state.active ? 'HabitButton active' : 'HabitButton'

    return (
      <StyledButttonForm>
        <label>Maintained your habits?</label>
        <StyledButttonForm>
          {this.habits.map(habit => {
            {
              state = {
                active: false,
              }
            }
            return (
              <StyledHabitButton
                className={className}
                onClick={this.handleClick}
              >
                {habit}
              </StyledHabitButton>
            )
          })}
          {/* <StyledHabitButton className={className} onClick={this.handleClick}>
            EXERCISE
          </StyledHabitButton>
          <StyledHabitButton className={className} onClick={this.handleClick}>
            SLEEP
          </StyledHabitButton>
          <StyledHabitButton className={className} onClick={this.handleClick}>
            VITAMIN D
          </StyledHabitButton>
          <StyledHabitButton className={className} onClick={this.handleClick}>
            JOURNAL
          </StyledHabitButton>
          <StyledHabitButton className={className} onClick={this.handleClick}>
            SOCIAL
          </StyledHabitButton>
          <StyledHabitButton className={className} onClick={this.handleClick}>
            NOURISHMENT
          </StyledHabitButton> */}
        </StyledButttonForm>
      </StyledButttonForm>
    )
  }
}
