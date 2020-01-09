const router = require('express').Router(),
  pasaranRoute = require('./pasaran'),  
  zodiakRoute = require('./zodiak'),  
  translateRoute = require('./translate')  

router.use('/pasaran', pasaranRoute)
router.use('/zodiak', zodiakRoute)
router.use('/translate', translateRoute)

module.exports = router
