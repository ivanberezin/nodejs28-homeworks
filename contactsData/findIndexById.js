function findIndexById(contactId, contacts) {
  const id = parseInt(contactId)
  const idx = contacts.findIndex(contact => contact.id === id)
  return idx
}

module.exports = findIndexById