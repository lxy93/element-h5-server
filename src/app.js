const jsonServer = require('json-server')
const path = require('path')
const router = require('./router')
const db = require('./db')()

const server = jsonServer.create()
// middlewares:中间件,用来处理所有请求，比如鉴权、静态资源等功能
    // json-server 提供的中间件：静态资源、请求体解析
    // 自定义中间件：鉴权 service
// router:带路由url的中间件，处理特定路由url的请求
    // json-server的路由：直接使用json数据的api
    // 自定义路由：有自定义逻辑的api controller

const middlewares = jsonServer.defaults({
    static:path.join(__dirname,'../public')
})
server.use(middlewares)
server.use(jsonServer.bodyParser) //请求体中间键

server.use((req, res, next)=> {
    const json = res.json.bind(res)
    res.success = (data)=> {
        return json({
            code:200,
            msg:'请求成功',
            data
        })
    }
    res.fail = (code = -1, msg, data)=> {
        return json({
            code,
            msg,
            data
        })
    }
    next()
})

router(server) 

const jsonRouter = jsonServer.router(db)
server.use((req, res, next)=> {
    setTimeout(next,1000)
})
server.use('/api',jsonRouter)

server.listen(8000,()=>{
    console.log('启动成功')
})