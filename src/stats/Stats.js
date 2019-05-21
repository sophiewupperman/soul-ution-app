import React from "react";
import MoodStat from "./MoodStat";
import HabitStreak from "./HabitStreaks";
import Calendar from "./Calendar";

export default function Stats() {
  return (
    <>
      <h2>Stats</h2>
      <Calendar />
      <MoodStat />
      <HabitStreak />
    </>
  );
}
