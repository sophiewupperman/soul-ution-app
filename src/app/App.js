import React, { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyles from '../misc/GlobalStyles'
import Navigation from './Navigation'
import Stats from '../stats/Stats'
import Form from '../form/Form'
import { getFromLocal } from '../services'
//import { moment } from 'moment'

const Grid = styled.div`
  display: grid;
`

export default function App() {
  const dateToday = new Date().toLocaleDateString()
  const dateYesterday = new Date(new Date().getTime() - 1000 * 60 * 60 * 24 * 1)

  const [habits, setHabits] = useState(
    getFromLocal('habits') || [
      { date: dateToday, name: 'EXERCISE', isChosen: false },
      { date: dateToday, name: 'SLEEP', isChosen: false },
      { date: dateToday, name: 'VITAMIN D', isChosen: false },
      { date: dateToday, name: 'JOURNAL', isChosen: false },
      { date: dateToday, name: 'SOCIAL', isChosen: false },
      { date: dateToday, name: 'NOURISHMENT', isChosen: false },
    ]
  )
  console.log(habits)

  const toggleHabbitChosen = index => {
    const newHabits = [...habits]
    newHabits[index].isChosen = !habits[index].isChosen
    setHabits(newHabits)
    console.log(habits)
  }

  const [mood, setInputValue] = useState(
    getFromLocal('mood') || { date: dateToday, mood: 100 }
  )

  const handleMoodChange = event => {
    setInputValue(event.target.value)
  }
  console.log(mood)

  const [days, setDays] = useState(getFromLocal('days') || [])

  const addNewDay = () => {
    setDays([
      ...days,
      {
        date: dateToday,
        mood: mood,
        habits: [habits],
      },
    ])
    // some function which should run once a day
    if (!hasOneDayPassed())
      return setDays(false && addNewDayHabit() && addNewDayMood())
  }

  function hasOneDayPassed() {
    // if there's a date in localstorage and it's equal to the above:
    // inferring a day has yet to pass since both dates are equal.
    if (localStorage.day.date === dateToday) return false
    // this portion of logic occurs when a day has passed
    else if (localStorage.day.date === !dateToday) return true
  }

  const yesterday = days.find(yesterday => yesterday.date === dateYesterday)

  console.log(yesterday)
  console.log(days)

  function addNewDayHabit() {
    const yesterdaysHabits = yesterday.habits

    if (yesterdaysHabits.active) {
      return (habits.width = +'40px')
    } else if (!yesterdaysHabits.active) {
      return habits
    }
  }

  function addNewDayMood() {
    const yesterdaysMood = yesterday.mood
    return {
      mood,
      yesterdaysMood,
    }
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
              addNewDay={addNewDay}
            />
          )}
        />
        <Navigation />
      </Grid>
    </Router>
  )
}
