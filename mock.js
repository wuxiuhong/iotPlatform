const jsonServer = require('json-server');
const path = require('path');
const fs = require('fs');
const _ = require('lodash'); // 支持加载多个db文件
const server = jsonServer.create();
const middleware = jsonServer.defaults();

const mockDir = path.join(__dirname, 'static/mock/');
const files = fs.readdirSync(mockDir);
let base = {};
files.forEach((file) => {
    if (file.indexOf('.json') > -1) {
        _.extend(base, require(path.resolve(mockDir, file)));
    }
});
server.use(middleware);
const router = jsonServer.router(base);

server.use(jsonServer.rewriter({
    'api/*' : '/$1'
}));

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
    res.jsonp(req.query);
});
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createAt = Date.now();
    }
    next();
});
server.use(router);
server.use('/api', router);

// 返回自定义格式数据
router.render = (req, res) => {
    const blackList = [];
    console.log(res);
    const localData = res.locals.data;
    const data = (localData instanceof Array && !blackList.includes(req.originalUrl))
        ? {data : localData, totalCounts : 20}
        : localData;
    res.jsonp({
        code : 0,
        data : data
    });
};

server.listen(3000, () => {
    console.log('JSON Server is running')
});
