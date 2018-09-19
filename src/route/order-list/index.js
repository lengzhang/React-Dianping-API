// 订单列表
const orderList = require('../../data/orderlist/orderList')
module.exports = (req, res) => {
    console.log('订单列表')
    // 输出参数
    console.log('用户名：' + req.params.username)

    res.send(orderList);
};
