const { decodeToken } = require('../helpers/jwt'),
  User = require('../controllers/user')

function authenticate(req, res, next) {
  try {
    let decoded = decodeToken(req.headers.token)
      next()
  } catch (error) {
    next(error)
  }
}

module.exports = authenticate 
