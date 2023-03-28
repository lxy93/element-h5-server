data:存放所有数据json文件
pubilc:存放静态资源，比如图片
src:项目的处理逻辑
    app.js 项目入口文件，包括应用创建、中间件使用
    router.js 处理自定义路由
    db.js 处理json-server的路由
    controller 存放controller
    service 存放service

middlewares:中间件,用来处理所有请求，比如鉴权、静态资源等功能
    json-server 提供的中间件：静态资源、请求体解析
    自定义中间件：鉴权 service
router:带路由url的中间件，处理特定路由url的请求
    json-server的路由：直接使用json数据的api
    自定义路由：有自定义逻辑的api controller

安装nodemon 自动启动服务器
npm i mon -D -S

在 package.json 中 新增
{
    "scripts":{
        "serve":"nodemon --delay 1000ms ./src/app.js"
    }
}

