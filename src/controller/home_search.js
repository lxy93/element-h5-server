const getHomeSearchData = require('../../data/home_search')

module.exports = (req,res)=> {
    const { searchKey } = req.query
    const allData = getHomeSearchData()
    const list = allData.list.filter(v=> v.label.includes(searchKey))
    console.log(res)
    return res.success({
        list
    })
}
