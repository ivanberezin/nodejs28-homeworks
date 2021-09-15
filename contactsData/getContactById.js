const getAll = require('./getAll')
const findIndexById = require('./findIndexById')
const notFoundError = require('./NotFoundError')

const getContactById = async(id, res) => {
  try {
    const contacts = await getAll()
    const idx = findIndexById(id, contacts)
    if (idx === -1) {
      return notFoundError(res)
    }
    return contacts[idx]
  } catch (error) {
    console.log('getContactById catch: ', error)
  }
}

module.exports = getContactById