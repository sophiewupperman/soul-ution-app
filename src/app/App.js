import React from "react";
import { BrowserRouter as , Route } from "react-router-dom";
import styled from 'styled-components'
import GlobalStyles from '../misc/GlobalStyles'
import Navigation from "./Navigation";
import Stats from "../stats/Stats";

const Grid = styled.div`
  display: grid;
`

export default function App() {
  return (
    <Router>
      <Grid>
        <Stats />
        <Navigation />
        <GlobalStyles />
        <Route exact path="/" render={() => <h1>Home</h1>} />
      </Grid>
    </Router>
  );
}
