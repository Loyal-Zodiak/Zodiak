const router = require('express').Router(),
  pasaranRoute = require('./pasaran'),  
  zodiakRoute = require('./zodiak'),  
  translateRoute = require('./translate'),
  UserController = require('../controllers/user')  

router.post('/google', UserController.googleLogin)
router.get('/github', UserController.githubLogin)
router.use('/pasaran', pasaranRoute)
router.use('/zodiak', zodiakRoute)
router.use('/translate', translateRoute)

module.exports = router
