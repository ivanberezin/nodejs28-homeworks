const fs = require('fs').promises

const contactsPath = require('./contactsPath')

const getAll = async() => {
  try {
    const data = await fs.readFile(contactsPath)
    const contacts = JSON.parse(data)
    return contacts
  } catch (error) {
    console.log('getAll catch: ', error)
  }
}

module.exports = getAll