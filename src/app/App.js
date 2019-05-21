import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppGrid from "./AppGrid";
import Navigation from "./Navigation";
import Stats from "../stats/Stats";

export default function App() {
  return (
    <Router>
      <AppGrid>
        <Stats />
        <Navigation />
      </AppGrid>
    </Router>
  );
}
