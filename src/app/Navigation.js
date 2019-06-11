import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { FiPlusCircle, FiBarChart2 } from 'react-icons/fi'

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
  padding: 10px;
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
        <FiBarChart2 size={30} />
      </StyledLink>
      <StyledLink to="/form">
        <FiPlusCircle size={30} />
      </StyledLink>
    </Wrapper>
  )
}
