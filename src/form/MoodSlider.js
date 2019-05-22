import React from 'react'
import styled from 'styled-components'

const StyledMoodSlider = styled.body`
  display: grid;
  justify-items: center;
  gap: 30px;
  margin-bottom: 10px;
`

export default function MoodSlider() {
  return (
    <StyledMoodSlider>
      <label forhtml="mood">How are you feeling today?</label>
      <input
        name="mood"
        type="range"
        min="1"
        max="100"
        size="200"
        /*value=MOOD*/
        /*onChange={this.handle...Change}*/
      />
    </StyledMoodSlider>
  )
}
