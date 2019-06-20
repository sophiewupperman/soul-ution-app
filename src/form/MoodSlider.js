import React from 'react'
import styled from 'styled-components'
import { FiSmile, FiFrown } from 'react-icons/fi'

const StyledMoodSlider = styled.div`
  justify-items: center;
  gap: 30px;
  display: flex;
  align-items: center;
`

export default function MoodSlider({ handleMoodChange, moodValue }) {
  return (
    <StyledMoodSlider>
      <FiFrown size={40} />
      <input
        name="mood"
        type="range"
        min="0"
        max="100"
        size="250"
        background="#144C50"
        value={moodValue}
        onChange={handleMoodChange}
      />
      <FiSmile size={40} />
    </StyledMoodSlider>
  )
}
