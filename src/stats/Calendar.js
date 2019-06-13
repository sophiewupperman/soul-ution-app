import React from 'react'
import styled from 'styled-components'
import * as moment from 'moment'

const StyledCalendar = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  direction: rtl;
  margin: 0px;
`

const StyledCurrentDate = styled.div`
  display: grid;
  width: calc(100% / 7);
  background: rgba(62, 69, 85, 0.3);
  border-radius: 13px;
  position: absolute;
  right: 0px;
  top: 0px;
  bottom: 45px;
  z-index: -1;
`

export default function Calendar({ lastSevenDays }) {
  return (
    <div>
      <StyledCurrentDate />
      <StyledCalendar>
        {lastSevenDays.map(day => (
          <p style={{ fontSize: '23px', margin: '0px' }} key={day}>
            {moment(day)
              .format('dd')
              .substring(0, 1)}
          </p>
        ))}
        {lastSevenDays.map(day => (
          <p style={{ fontSize: '11px', margin: '0px' }} key={day}>
            {moment(day)
              .format('DD/M')
              .substring(0, 5)}
          </p>
        ))}
      </StyledCalendar>
    </div>
  )
}
