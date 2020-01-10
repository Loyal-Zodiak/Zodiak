const router = require('express').Router()
const TranslateController = require('../controllers/TranslateController')
router.get('/languages', TranslateController.findLanguages)
router.post('/', TranslateController.doTranslate)

module.exports = router
