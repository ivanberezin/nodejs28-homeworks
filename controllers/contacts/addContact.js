const data = require('../../contactsData')

const addContact = async (req, res) => {
  try {
    const newContact = await data.add(req.body)
    res.status(201).json(newContact)
  } catch (error) {
    console.log('addContact catch: ', error)
  }
}

module.exports = addContact