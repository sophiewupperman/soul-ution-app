import React from 'react'
import styled from 'styled-components'

const StyledMoodSlider = styled.div`
  display: grid;
  justify-items: center;
  gap: 30px;
  margin-bottom: 10px;
`

export default function MoodSlider({ handleMoodChange, mood }) {
  return (
    <StyledMoodSlider>
      <label forhtml="mood">
        How are you feeling today?
        {mood}%
      </label>
      <input
        name="mood"
        type="range"
        min="0"
        max="100"
        size="200"
        value={mood}
        onChange={handleMoodChange}
      />
    </StyledMoodSlider>
  )
}
