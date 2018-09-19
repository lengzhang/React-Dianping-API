// 详情页 - 商户信息
const detailInfo = require('../../data/detail/info.js')
module.exports = (req, res) => {
    console.log('详情页 - 商户信息')
    // 输出参数
    console.log('商户id: ' + req.params.id)

    res.send(detailInfo);
};
