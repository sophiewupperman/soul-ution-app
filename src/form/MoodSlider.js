import React from 'react'
import styled from 'styled-components'
import { FiSmile, FiFrown } from 'react-icons/fi'

const StyledMoodSlider = styled.div`
  justify-items: center;
  gap: 30px;
  margin-bottom: 10px;
`

export default function MoodSlider({ handleMoodChange, moodValue }) {
  return (
    <StyledMoodSlider>
      <FiFrown size={30} />
      <input
        name="mood"
        type="range"
        min="0"
        max="100"
        size="200"
        value={moodValue}
        onChange={handleMoodChange}
      />
      <FiSmile size={30} />
    </StyledMoodSlider>
  )
}
