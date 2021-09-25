function unauthorizedError(res, message) {
  return res.status(401).json({ message: message })
}

module.exports = unauthorizedError