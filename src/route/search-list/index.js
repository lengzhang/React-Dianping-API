var searchListData = require('../../data/search/list')
module.exports = (req, res) => {
    console.log('搜索结果页 - 搜索结果 ------------------------------')
    // 输出参数
    console.log('当前页数：' + req.params.page)
    console.log('当前城市：' + req.params.city)
    console.log('当前类别：' + req.params.category)
    console.log('关键字：' + req.params.keyword)

    if (req.params.keyword != undefined) {
        if (req.params.page >= 5) {
            searchListData.hasMore = false
        } else {
            searchListData.hasMore = true
        }
    }
    res.send(searchListData);
};
