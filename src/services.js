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
