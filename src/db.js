const test = require('../data/test')
const homePage = require('../data/home_page')
const restful =  (data)=> {
    return {
        code:200,
        msg:'',
        data
    }
} 
module.exports = () => {
    return {
        testjson:test(),
        home_data: restful(homePage())
    }
}