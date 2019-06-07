import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyles from '../misc/GlobalStyles'
import Navigation from './Navigation'
import Stats from '../stats/Stats'
import Form from '../form/Form'
import { getFromLocal, setToLocal } from '../services'

const moment = require('moment')

const Grid = styled.div`
  display: grid;
`

const habits = [
  { name: 'EXERCISE', color: '#5e6a7e' },
  { name: 'SLEEP', color: '#5eff7e' },
  { name: 'VITAMIN D', color: '#5e6a7e' },
  { name: 'JOURNAL', color: '#5e6a7e' },
  { name: 'SOCIAL', color: '#5e6a7e' },
  { name: 'NOURISHMENT', color: '#5e6a7e' },
]

const dateToday = moment().format('YYYY-MM-DD')

// const dateYesterday = moment()
//   .subtract(1, 'day')
//   .format('YYYY-MM-DD')

export default function App() {
  const [days, setDays] = useState(
    getFromLocal('days') || [
      {
        date: dateToday,
        mood: '100',
        habits: habits,
      },
    ]
  )

  useEffect(() => {
    setToLocal('days', days)
  }, [days])

  const handleToggleHabbitChosen = index => {
    const today = getCurrentDay()
    const newHabits = [...today.habits]
    const habit = newHabits[index]
    newHabits[index] = {
      ...habit,
      isChosen: !habit.isChosen,
    }
    saveDay({ ...today, habits: newHabits })
  }

  function handleMoodChange(event) {
    const today = getCurrentDay()

    saveDay({ ...today, mood: event.target.value })
  }

  function saveDay(newDay) {
    const newDays = days.slice()
    const index = days.findIndex(day => newDay.date === day.date)

    newDays[index] = {
      ...newDay,
    }

    setDays(newDays)
  }

  function getCurrentDay() {
    return days.find(day => day.date === dateToday)
  }

  const currentDay = getCurrentDay()

  return (
    <Router>
      <Grid>
        <GlobalStyles />
        <Route
          exact
          path="/"
          render={() => (
            <Stats days={days} habits={habits} mood={currentDay.mood} />
          )}
        />

        <Route
          path="/form"
          render={() => (
            <Form
              habits={currentDay.habits}
              toggleHabbitChosen={handleToggleHabbitChosen} //führt die obere function toggleHabitChange
              moodValue={currentDay.mood}
              handleMoodChange={handleMoodChange}
            />
          )}
        />
        <Navigation />
      </Grid>
    </Router>
  )
}
