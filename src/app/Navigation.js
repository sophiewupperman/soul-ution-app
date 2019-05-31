import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  bottom: 0px;
  width: 100%;
`

const StyledLink = styled(NavLink)`
  height: 45px;
  text-align: center;
  padding: 15px;
  align-items: center;
  color: black;
  text-decoration: none;
  text-shadow: 0px 0.5px 0.5px;

  &.active {
    color: white;
  }
`

export default function Navigation() {
  return (
    <Wrapper>
      <StyledLink exact to="/">
        STATISTICS
      </StyledLink>
      <StyledLink to="/form">LOG BOOK</StyledLink>
    </Wrapper>
  )
}
