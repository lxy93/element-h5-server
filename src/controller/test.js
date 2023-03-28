const test = require('../../data/test')

module.exports = (req,res,next) =>{
    let testData = test()
    testData.desc = '我是自定义测试数据11'
    res.json(testData)
}