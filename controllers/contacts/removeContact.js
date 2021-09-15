const data = require('../../contactsData')

const removeContact = async (req, res) => {
  try {
    console.log('in removeContact')
    const { id } = req.params
    const deletedContact = await data.del(id, res)
    res.status(200).json({
      message: 'contact deleted',
      data: { result: deletedContact }
    })
  } catch (error) {
    console.log('removeContact catch: ', error)
  }
}

module.exports = removeContact