const simpleId = require('./simpleId')
const getAll = require('./getAll')
const updateContacts = require('./updateContacts')

const add = async(bodyInfo) => {
  try {
    const contacts = await getAll()
    const id = simpleId(contacts)
    const newContact = { id, ...bodyInfo }
    contacts.push(newContact)
    await updateContacts(contacts)
    return newContact
  } catch (error) {
    console.log('add catch: ', error)
  }
}

module.exports = add