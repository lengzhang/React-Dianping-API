// 详情页 - 用户评论
const detailComment = require('../../data/detail/comment')
module.exports = (req, res) => {
    console.log('详情页 - 用户点评')
    // 输出参数
    console.log('商户id: ' + req.params.id)
    console.log('当前页数: ' + req.params.page)

    res.send(detailComment);
};
