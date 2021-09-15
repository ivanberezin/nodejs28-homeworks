function simpleId(contacts) {
  for (let i = 0; i <= contacts.length; i = i + 1) {
    const simpleId = i + 1
    const idExist = contacts.find(item => item.id === simpleId)
    if (!idExist) {
      return simpleId
    }
  }
}

module.exports = simpleId