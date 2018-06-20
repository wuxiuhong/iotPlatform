const jsonServer = require('json-server');
const server = jsonServer.create();

const path = require('path');
const fs = require('fs');
const _ = require('lodash'); // 支持加载多个db文件
const mockDir = path.join(__dirname, 'static/mock/');
const files = fs.readdirSync(mockDir);
const PORT = 3000;

let base = {};
files.forEach((file) => {
    if (file.indexOf('.json') > -1) {
        _.extend(base, require(path.resolve(mockDir, file)));
    }
});
const router = jsonServer.router(base);

// 使用中间件
const middleware = jsonServer.defaults();
server.use(middleware);

// 重写请求地址
server.use(jsonServer.rewriter({
    'api/*' : '/$1'
}));

// 处理请求数据
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    const url = req.url;
    req.url = url.replace(/(get)|(add)|(update)|(delete)/, '');
    // console.log()
    if (/^\/update/.test(url)) {
        req.method = 'PUT';
        req.url = `${req.url}/${req.body.id}`;
    } else if (/^\/delete/.test(url)) {
        req.method = 'DELETE';
        req.url = `${req.url}/${req.body.id}`;
    }
    next();
});
server.use(router);
// 返回自定义格式数据
router.render = (req, res) => {
    const blackList = [];
    const localData = res.locals.data;
    const data = (localData instanceof Array && !blackList.includes(req.originalUrl))
        ? {data : localData, totalCounts : 20}
        : localData;
    res.jsonp({
        code : 0,
        data : data
    });
};

server.listen(PORT, () => {
    console.log(`mock server is running: ${PORT}`);
});
