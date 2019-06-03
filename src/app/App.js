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
`

export default function App() {
  const moment = require('moment')

  const dateToday = moment().format('YYYY-MM-DD')
  const dateYesterday = moment()
    .subtract(1, 'day')
    .format('YYYY-MM-DD')
  console.log(dateToday)
  console.log(dateYesterday)

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

  /*const yesterdaysHabit = habits.find(habit => habit.date === dateYesterday)
  console.log(yesterdaysHabit)*/

  const toggleHabbitChosen = index => {
    const newHabits = [...habits]
    newHabits[index].isChosen = !habits[index].isChosen
    setHabits(newHabits)
  }

  const [moodValue, setInputValueMood] = useState(
    getFromLocal('moodValue') || '100'
  )

  const handleMoodChange = event => {
    setInputValueMood(event.target.value)
  }

  const [moods, setMoods] = useState(getFromLocal('moods') || [])

  const handleAddNewMoodDay = e => {
    e.preventDefault()

    setMoods([...moods, { date: dateToday, mood: moodValue }])
  }
  console.log(moodValue)
  console.log(moods)

  const mood = moods.map(mood => {
    return mood
  })

  console.log(mood)

  const addNewDay = () => {
    // function which should run once a day
    if (!hasOneDayPassed()) return false && handleAddNewMoodDay()
  }

  function hasOneDayPassed() {
    if (localStorage.mood.date === dateToday) return false
    else if (localStorage.mood.date === !dateToday) return true
  }

  /*const [days, setDays] = useState(
    getFromLocal('days') || [
      {
        date: dateToday,
        mood: 100,
        habits: [
          { name: 'EXERCISE', isChosen: false },
          { name: 'SLEEP', isChosen: false },
          { name: 'VITAMIN D', isChosen: false },
          { name: 'JOURNAL', isChosen: false },
          { name: 'SOCIAL', isChosen: false },
          { name: 'NOURISHMENT', isChosen: false },
        ],
      },
    ]
  )

  const addNewDay = () => {
    setDays([
      ...days,
      {
        date: dateToday,
        mood: mood,
        habits: [habits],
      },
    ])
    if (!hasOneDayPassed())
      return setDays(false && addNewDayHabit() && addNewDayMood())
  }
  console.log(days)

  function hasOneDayPassed() {
    if (localStorage.day.date === dateToday) return false
    else if (localStorage.day.date === !dateToday) return true
  }*/

  return (
    <Router>
      <Grid>
        <GlobalStyles />
        <Route
          exact
          path="/"
          render={({ history }) => <Stats habits={habits} mood={moodValue} />}
        />

        <Route
          path="/form"
          render={() => (
            <Form
              habits={habits}
              setHabits={setHabits}
              toggleHabbitChosen={toggleHabbitChosen} //führt die obere function toggleHabitChange
              mood={moodValue}
              setInputValueMood={setInputValueMood}
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
