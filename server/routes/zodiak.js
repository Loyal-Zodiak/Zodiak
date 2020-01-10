const router = require('express').Router()
const controller = require('../controllers/zodiacController')
  
router.post('/', controller.getHoroscope)

router.post('/yesterday', controller.getYesterdayHoroscope)

router.post('/tomorrow', controller.getTomorrowHoroscope)

module.exports = router
