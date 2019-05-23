export function getFromLocal(habit) {
  try {
    return JSON.parse(localStorage.getItem(habit))
  } catch (error) {
    console.log(error)
  }
}

export function setToLocal(habits, data) {
  localStorage.setItem(habits, JSON.stringify(data))
}
