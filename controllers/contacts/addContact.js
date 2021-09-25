const { contactModel } = require('../../models')

const addContact = async (req, res, next) => {
  try {
    if (req.user) {
      const newContactWithOwner = await contactModel.create({ ...req.body, owner: req.user._id })
      return res.status(201).json(newContactWithOwner)
    }
    const newContact = await contactModel.create(req.body)
    res.status(201).json(newContact)
  } catch (error) {
    console.log('addContact catch: ', error)
    next(error)
  }
}

module.exports = addContact