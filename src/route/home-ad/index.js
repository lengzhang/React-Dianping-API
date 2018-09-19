// 首页 —— 广告（超值特惠）
var homeAdData = require('../../data/home/ad');
module.exports = (req, res) => {
    console.log('首页 —— 广告（超值特惠）')
    res.send(homeAdData);
};
