const data = require('../../contactsData')

const listContacts = async (req, res) => {
  try {
    const contacts = await data.getAll()
    res.status(200).json(contacts)
  } catch (error) {
    console.log('listContacts catch: ', error)
  }
}

module.exports = listContacts