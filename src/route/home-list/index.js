// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('../../data/home/list')
module.exports = (req, res) => {
    console.log('首页 —— 推荐列表（猜你喜欢）')
    // 输出参数
    console.log(req.params);
    console.log('当前城市：' + req.params.city)
    console.log('当前页数：' + req.params.page)
    res.send(homeListData);
};
