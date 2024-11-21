const express = require('express');
const urlController = require('../controllers/urlController.js');
const router = express.Router();

router.get('/', urlController.getAll);

router.post('/shorten', urlController.add);

router.get('/shorten/:short', urlController.get);

router.put('/shorten/:short', urlController.upd);

router.delete('/shorten/:short', urlController.del);

router.get('/shorten/:short/stats', urlController.sts);

module.exports = router;