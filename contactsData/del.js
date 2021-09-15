const updateContacts = require('./updateContacts')
const getAll = require('./getAll')
const notFoundError = require('./NotFoundError')
const findIndexById = require('./findIndexById')

const del = async(id, res) => {
  try {
    const contacts = await getAll()
    const idx = findIndexById(id, contacts)
    console.log('idx: ', idx)
    if (idx === -1) {
      notFoundError(res)
    }
    const newContacts = contacts.filter(item => item.id !== contacts[idx].id)
    await updateContacts(newContacts)
    return contacts[idx]
  } catch (error) {
    console.log('del catch: ', error)
  }
}

module.exports = del