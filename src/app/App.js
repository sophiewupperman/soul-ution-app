import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyles from '../misc/GlobalStyles'
import Navigation from './Navigation'
import Stats from '../stats/Stats'
import Form from '../form/Form'
import { getFromLocal } from '../services'

const Grid = styled.div`
  display: grid;
  height: 100vh;
`

export default function App() {
  const [habits, setHabits] = useState(
    getFromLocal('habits') || [
      { name: 'EXERCISE', isChosen: false },
      { name: 'SLEEP', isChosen: false },
      { name: 'VITAMIN D', isChosen: false },
      { name: 'JOURNAL', isChosen: false },
      { name: 'SOCIAL', isChosen: false },
      { name: 'NOURISHMENT', isChosen: false },
    ]
  )

  const toggleHabbitChosen = index => {
    const newHabits = [...habits]
    newHabits[index].isChosen = !habits[index].isChosen
    setHabits(newHabits)
    console.log(habits)
    // Save in LocalStorage - array in local storage packen -> im anderen view die daten aus dem localstorage ziehen
  }

  const [mood, setInputValue] = useState(getFromLocal('mood') || 100)

  const handleMoodChange = event => {
    setInputValue(event.target.value)
    console.log(mood)
  }

  return (
    <Router>
      <Grid>
        <GlobalStyles />
        <Route
          exact
          path="/"
          render={({ history }) => <Stats habits={habits} mood={mood} />}
        />

        <Route
          path="/form"
          render={() => (
            <Form
              habits={habits}
              setHabits={setHabits}
              toggleHabbitChosen={toggleHabbitChosen} //führt die obere function toggleHabitChange
              mood={mood}
              setInputValue={setInputValue}
              handleMoodChange={handleMoodChange}
            />
          )}
        />
        <Navigation />
      </Grid>
    </Router>
  )
}
