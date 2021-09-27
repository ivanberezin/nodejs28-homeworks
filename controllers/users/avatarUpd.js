const path = require('path')
const Jimp = require('jimp')
const { promises: fsPromises } = require('fs')

async function avatarLocalUpdate(req, res, next) {
  try {
    const ext = path.parse(req.file.originalname).ext
    const userId = req.user._id
    const { path: tmpPath } = req.file
    await Jimp.read(tmpPath)
      .then(avatarFoto => {
        return avatarFoto
          .resize(Jimp.AUTO, 250)
          .write(`public/avatars/${userId}${ext}`)
      })
      .catch(err => { console.error(err) })
    await fsPromises.unlink(tmpPath)
    req.body = { avatarURL: `http://localhost:3001/avatars/${userId}${ext}` }
    next()
  } catch (err) {
    next(err)
  }
};

module.exports = avatarLocalUpdate