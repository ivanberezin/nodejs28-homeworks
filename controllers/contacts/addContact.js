const { contactModel } = require('../../models')

const addContact = async (req, res, next) => {
  try {
    const newContact = await contactModel.create(req.body)
    res.status(201).json(newContact)
  } catch (error) {
    console.log('addContact catch: ', error)
    next(error)
  }
}

module.exports = addContact