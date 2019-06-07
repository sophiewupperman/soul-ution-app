import React from 'react'
import styled from 'styled-components'
import * as moment from 'moment'

const StyledCalendar = styled.section`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  justify-content: space-around;
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

export default function Calendar({ lastSeventDays }) {
  return (
    <div>
      <StyledCurrentDate />
      <StyledCalendar>
        {lastSeventDays.map(day => (
          <h1 key={day}>
            {moment(day)
              .format('dd')
              .substring(0, 1)}
          </h1>
        ))}
      </StyledCalendar>
    </div>
  )
}
