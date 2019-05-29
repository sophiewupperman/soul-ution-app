import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getFromLocal, setToLocal } from '../services'

const StyledMoodSlider = styled.div`
  display: grid;
  justify-items: center;
  gap: 30px;
  margin-bottom: 10px;
`

export default function MoodSlider() {
  const [mood, setInputValue] = useState(getFromLocal('mood') || 100)

  const handleMoodChange = event => {
    setInputValue(event.target.value)
    console.log(mood)
  }

  useEffect(() => {
    setToLocal('mood', mood)
  })

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
