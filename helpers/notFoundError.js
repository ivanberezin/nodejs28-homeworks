function notFoundError(res) {
  return res.status(404).json({ message: 'Not found' })
}

module.exports = notFoundError