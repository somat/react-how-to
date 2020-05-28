const express = require('express')
const router = express.Router()
const upload = require('./helpers/upload')
const formHandler = require('./handlers/form')

// Homepage, dont throw error, just say hello.
router.get('/', function (req, res) { res.json({ message: 'Hello.' }) })

router.post('/form',
  upload.single('file'),
  formHandler.handleForm)

module.exports = router
