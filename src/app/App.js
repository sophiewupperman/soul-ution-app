import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'
import GlobalStyles from '../misc/GlobalStyles'
import Navigation from './Navigation'
import Stats from '../stats/Stats'
import Form from '../form/Form'

const Grid = styled.div`
  display: grid;
`

export default function App() {
  return (
    <Router>
      <Grid>
        <GlobalStyles />
        <Route exact path="/" render={() => <Stats />} />
        <Route
          path="/form"
          render={
            (/*{ history }*/) => (
              <Form /*onFormSubmit={data => createMoodHabit(data, history)}*/ />
            )
          }
        />
        <Navigation />
      </Grid>
    </Router>
  )
}
