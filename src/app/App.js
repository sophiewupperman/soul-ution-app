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
  { name: 'EXERCISED', color: '#5C6BC0' },
  { name: 'SLEPT WELL', color: '#42A5F5  ' },
  { name: 'VITAMIN D', color: '#81D4FA  ' },
  { name: 'JOURNALED', color: '#4DD0E1  ' },
  { name: 'SOCIALISED', color: '#80CBC4  ' },
  { name: 'ATE HEALTHY', color: '#C5E1A5  ' },
]

const dateToday = moment().format('YYYY-MM-DD')

export default function App() {
  const [days, setDays] = useState(
    getFromLocal('days') || [
      {
        date: dateToday,
        mood: 50,
        habits,
      },
    ]
  )

  useEffect(() => {
    setToLocal('days', days)
  }, [days])

  const handleToggleHabbitChosen = index => {
    const today = getCurrentDay() || {
      date: dateToday,
      habits,
      mood: 0,
    }

    const newHabits = [...today.habits]
    const habit = newHabits[index]
    newHabits[index] = {
      ...habit,
      isChosen: !habit.isChosen,
    }
    saveDay({ ...today, habits: newHabits })
  }

  function handleMoodChange(event) {
    const mood = event.target.value
    const today = getCurrentDay() || {
      date: dateToday,
      habits,
    }

    saveDay({ ...today, mood })
  }

  function getCurrentDay() {
    return days && days.find(day => day.date === dateToday)
  }

  const currentDay = getCurrentDay() || {
    date: dateToday,
    mood: 50,
    habits,
  }

  function saveDay(newDay) {
    const newDays = days.slice()
    const index = days.findIndex(day => newDay.date === day.date)
    if (index === -1) {
      newDays.push(newDay)
    } else {
      newDays[index] = {
        ...newDay,
      }
    }

    setDays(newDays)
  }

  return (
    <Router>
      <Grid>
        <GlobalStyles />
        <Route
          exact
          path="/"
          render={() => (
            <Stats
              days={days}
              habits={habits}
              mood={currentDay && currentDay.mood}
            />
          )}
        />

        <Route
          path="/form"
          render={() => (
            <Form
              habits={currentDay && currentDay.habits}
              toggleHabbitChosen={handleToggleHabbitChosen} //führt die obere function toggleHabitChange
              moodValue={currentDay && currentDay.mood}
              handleMoodChange={handleMoodChange}
            />
          )}
        />
        <Navigation />
      </Grid>
    </Router>
  )
}
