export function getFromLocal(value) {
  try {
    return JSON.parse(localStorage.getItem(value))
  } catch (error) {
    console.log(error)
  }
}

export function setToLocal(valueName, data) {
  localStorage.setItem(valueName, JSON.stringify(data))
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

export function postValue(data) {
  return fetchHabits('POST', data)
}
