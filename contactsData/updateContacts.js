const fs = require('fs').promises

const contactsPath = require('./contactsPath')

const updateContacts = async (contacts) => {
  try {
    contacts.sort((a, b) => a.id > b.id ? 1 : -1)
    const contactsString = JSON.stringify(contacts)
    await fs.writeFile(contactsPath, contactsString)
  } catch (error) {
    console.log('updateContacts catch: ', error)
  }
}

module.exports = updateContacts