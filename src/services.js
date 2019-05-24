export function getFromLocal(habits) {
  try {
    return JSON.parse(localStorage.getItem(habits))
  } catch (error) {
    console.log(error)
  }
}

export function setToLocal(habits, data) {
  localStorage.setItem(habits, JSON.stringify(data))
}
