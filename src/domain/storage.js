const deleteStorage = key => {
  localStorage.removeItem(key)
}

const clearStorage = () => {
  localStorage.clear()
}

const insertStorage = (key, item) => {
  localStorage.setItem(key, item)
}

export { insertStorage, clearStorage, deleteStorage }
