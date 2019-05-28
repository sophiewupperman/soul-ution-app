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

export function fetchHabits(method, data, id = '') {
  return fetch('/cards/' + id, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .catch(function(error) {
      console.log(error)
    })
}

export function postHabit(data) {
  return fetchHabits('POST', data)
}
