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
  { name: 'EXERCISED', color: '#5e6a7e' },
  { name: 'SLEPT WELL', color: '#9DC2D0' },
  { name: 'VITAMIN D', color: '#C69D6F' },
  { name: 'JOURNALED', color: '#ABBFB9' },
  { name: 'SOCIALISED', color: '#CED0BC' },
  { name: 'ATE HEALTHY', color: '#87A2A9' },
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

  //const yesterdaysData = days.find(day => day.date === dateYesterday)

  //console.log(yesterdaysData)

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

  //push today or do you push yesterday ? or both? neues leeres 0bjekt hinzufügen
  // does yesterday have to be saved?     'setTimeout(setDays(saveYesterday && newDays.push(newDay) && newDays.shift()), midnight)'

  // useState(
  //   setTimeout(
  //     days.push({
  //       date: dateToday,
  //       mood: 'mood',
  //       habits: habits,
  //     })
  //   ),
  //   midnight
  // )

  // useState(
  //   setTimeout(
  //     days.shift({
  //       date: dateToday,
  //       mood: 'mood',
  //       habits: habits,
  //     })
  //   ),
  //   midnight
  // )

  // setTimeout(useState(days.push({
  //   date: dateToday,
  //   mood: 'mood',
  //   habits: habits,
  // })), newDay)

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
