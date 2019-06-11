import React from 'react'
import styled from 'styled-components'
import MoodSlider from './MoodSlider'
import HabitButton from './HabitButton'

const StyledForm = styled.div`
  display: grid;
  justify-items: center;
  gap: 10px;
  padding: 20px;
`

export default function Form({
  days,
  habits,
  toggleHabbitChosen,
  moodValue,
  handleMoodChange,
}) {
  /* originalArray.map(object => object.b); */
  // const dayHabits = days.map(day => day.habits)

  return (
    <StyledForm days={days}>
      <h1>SOUL UTION</h1>
      <label forhtml="mood">How are you feeling today?</label>
      <MoodSlider handleMoodChange={handleMoodChange} moodValue={moodValue} />
      <p>Maintained your habits?</p>
      {habits.map((habit, index) => {
        return (
          <HabitButton
            habit={habit} //why? ... habit in der arrow funktion steht (name) für ein einzelndes object in dem array - in der HabitButton Datei wird das weiter gegeben als prop {habit} um den namen aus dem objekt oben zu bekommen - the VALUE of HabitButton is one single object from the habits array called habit - this is how you get the Tag to have a meaning/value
            index={index} //the second parameter defines the index
            toggleHabbitChosen={toggleHabbitChosen} //führt die obere function toggleHabitChange
            key={habit.name}
            isChosen={habit.isChosen}
          />
        )
      })}
    </StyledForm>
  )
}

// {days.map((day, index) =>
//   day.habits.map((habit, index) => {
//     return (
//       <HabitButton
//         habit={habit} //why? ... habit in der arrow funktion steht (name) für ein einzelndes object in dem array - in der HabitButton Datei wird das weiter gegeben als prop {habit} um den namen aus dem objekt oben zu bekommen - the VALUE of HabitButton is one single object from the habits array called habit - this is how you get the Tag to have a meaning/value
//         index={index} //the second parameter defines the index
//         toggleHabbitChosen={toggleHabbitChosen} //führt die obere function toggleHabitChange
//         key={habit.name}
//         isChosen={habit.isChosen}
//       />
//     )
//   })
// )}
