const data = require('../../contactsData')

const updateContact = async (req, res) => {
  try {
    const { id } = req.params
    const body = req.body
    const updatedContact = await data.update(body, res, id)
    res.status(200).json({
      data: {
        result: updatedContact
      }
    })
  } catch (error) {
    console.log('updateContact catch: ', error)
  }
}

module.exports = updateContact