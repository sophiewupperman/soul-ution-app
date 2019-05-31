import React from 'react'
import styled from 'styled-components'

const StyledCalendar = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  place-items: end;
  text-align: center;
  padding: 10px;
  right: 10px;
`

const StyledCurrentDate = styled.div`
  display: grid;
  width: 40px;
  height: 95vh;
  background: rgba(62, 69, 85, 0.3);
  border-radius: 13px;
  position: absolute;
  right: 0px;
`

export default function Calendar() {
  return (
    <div>
      <StyledCurrentDate />
      <StyledCalendar>
        <h1>M</h1>
        <h1>T</h1>
        <h1>W</h1>
        <h1>T</h1>
        <h1>F</h1>
        <h1>S</h1>
        <h1>S</h1>
        <h1>M</h1>
      </StyledCalendar>
    </div>
  )
}
