var express = require('express');
var router = express.Router();
module.exports = router;

router.get('/homead', require('./home-ad'));
router.get('/homelist/:city/:page', require('./home-list'));
router.get('/search/:page/:city/:category', require('./search-list'));
router.get('/search/:page/:city/:category/:keyword', require('./search-list'));
router.get('/detail/info/:id', require('./detail-info'));
router.get('/detail/comment/:page/:id', require('./detail-comment'));
router.get('/orderlist/:username', require('./order-list'));
router.post('/submitComment', require('./comment'));
