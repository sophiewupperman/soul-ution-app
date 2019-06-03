import React from 'react'
import styled from 'styled-components'

const StyledMoodSlider = styled.div`
  display: grid;
  justify-items: center;
  gap: 30px;
  margin-bottom: 10px;
`

export default function MoodSlider({
  handleMoodChange,
  moods,
  moodValue,
  todaysDate,
}) {
  return (
    <StyledMoodSlider>
      <label forhtml="mood">
        How are you feeling today?
        {moodValue}%
      </label>
      <input
        name="mood"
        type="range"
        min="0"
        max="100"
        size="200"
        value={moodValue}
        date={todaysDate}
        onChange={handleMoodChange}
      />
    </StyledMoodSlider>
  )
}
