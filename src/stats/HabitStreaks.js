import React from 'react'
import styled from 'styled-components'

const StyledHabitStreaks = styled.section`
  display: grid;
  gap: 10px;
  padding: 20px;
`
const StyledHabitStreak = styled.div`
  background: #b6c1d0;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: ${props => (props.active ? 'block' : 'none')};
`

export default function HabitStreak({ habits }) {
  // const [habits, setHabits] = useState(getFromLocal('habits') || [])

  // const addHabitStreak = index => {
  //   // const newHabits = [...habits]
  //   // newHabits[index].isChosen = !habits[index].isChosen
  //   // setHabits(newHabits)

  //   // console.log(habits)
  //   // Save in LocalStorage - array in local storage packen -> im anderen view die daten aus dem localstorage ziehen
  // }

  return (
    <StyledHabitStreaks>
      {habits.map((habit, index) => {
        if (habit.isChosen) {
          return (
            <StyledHabitStreak
              active={habit.isChosen}
              value={habit}
              index={index}
              key={index}
            />
          )
        } else {
          return <div />
        }
      })}
    </StyledHabitStreaks>
  )
}

//<StyledHabitStreak active="getFromLocal('habit')" />
