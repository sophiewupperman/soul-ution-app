import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyles from '../misc/GlobalStyles'
import Navigation from './Navigation'
import Stats from '../stats/Stats'
import Form from '../form/Form'
import { createHabit } from '../form/Form'

const Grid = styled.div`
  display: grid;
  height: 100vh;
`

export default function App() {
  return (
    <Router>
      <Grid>
        <GlobalStyles />
        <Route
          exact
          path="/"
          render={({ history }) => (
            <Stats onFormSubmit={data => createHabit(data, history)} />
          )}
        />

        <Route path="/form" render={() => <Form />} />
        <Navigation />
      </Grid>
    </Router>
  )
}

/*<Route
      path="/form"
      render={() => (
        <StyledHabitStreaks onFormSubmit={data => createHabit(data, history)} />
      )}
    />
          }</Router>*/
