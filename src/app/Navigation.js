import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: plum;
  color: white;
  box-shadow: 0 0 8px #0007;
  position: sticky;
`

const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  color: black;
  text-decoration: none;

  &.active {
    background: lightgray;
    color: white;
  }
`

export default function Navigation() {
  return (
    <Wrapper>
      <StyledLink exact to="/">
        Statistics
      </StyledLink>
      <StyledLink to="/create">Log Book</StyledLink>
    </Wrapper>
  )
}
