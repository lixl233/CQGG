function getSearchList(Data, inputValue) {
  if (!inputValue) {
    return Data
  }
  const getFilter = Data.filter((player) => {
    if (player.name.toLowerCase().search(inputValue.toLowerCase()) !== -1) {
      return true
    }
    return false
  })
  return getFilter
}

export { getSearchList }
