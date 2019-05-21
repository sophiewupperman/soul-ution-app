import React from "react";
import styled from "styled-components";

const StyledCalendar = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 10px;
  padding: 20px;
`;

export default function Calendar() {
  return (
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
  );
}
