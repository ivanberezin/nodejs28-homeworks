const data = require('../../contactsData')

const getById = async (req, res) => {
  try {
    const { id } = req.params
    const contact = await data.getContactById(id, res)
    res.status(200).json({
      data: {
        result: contact
      }
    })
  } catch (error) {
    console.log('getById catch: ', error)
  }
}

module.exports = getById