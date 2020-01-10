const router = require('express').Router()
const pasarController = require('../controllers/pasarController')
  
router.post('/', pasarController.getPasar)

module.exports = router
