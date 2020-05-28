let express = require('express')
let router = express.Router()

// Homepage, dont throw error, just say hello.
router.get('/', function (req, res) { res.json({ message: 'Hello.' }) })

module.exports = router
