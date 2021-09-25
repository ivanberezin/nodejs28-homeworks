function validateError(res) {
  return res.status(400).json({ message: 'Ошибка от Joi или другой библиотеки валидации' })
}

module.exports = validateError