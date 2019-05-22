import React from 'react'

export default function MoodSlider() {
  return (
    <div>
      <label>How are you feeling today?</label>
      <input
        /*value=MOOD*/
        type="range"
        min="0"
        max="100"
        value="50"
        class="slider"
        id="myRange"
        /*onChange={this.handle...Change}*/
      />
    </div>
  )
}
