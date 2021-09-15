const updateContacts = require('./updateContacts')
const getAll = require('./getAll')
const notFoundError = require('./NotFoundError')
const findIndexById = require('./findIndexById')

const update = async(updInfo, res, id) => {
  try {
    const contacts = await getAll()
    const idx = findIndexById(id, contacts)
    if (idx === -1) {
      return notFoundError(res)
    }
    contacts[idx] = { ...contacts[idx], ...updInfo }
    await updateContacts(contacts)
    return contacts[idx]
  } catch (error) {
    console.log('update catch: ', error)
  }
}

module.exports = update