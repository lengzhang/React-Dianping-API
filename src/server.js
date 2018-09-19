var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

var helmet = require('helmet');
app.use(helmet());

var bodyParser = require('body-parser');
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");

    if (req.method == 'OPTIONS') {
        // 跨域并设置headers的请求，所有请求需要两步完成！
        // 第一步：发送预请求 OPTIONS 请求。此时 服务器端需要对于OPTIONS请求作出响应 一般使用202响应即可 不用返回任何内容信息。
        // res.status(200);
        res.sendStatus(202);
    } else {
        next();
    }

});

app.get('/', (req, res) => {
    res.send('Get request to homepage');
});

app.use('/api', require('./route'));

server.listen(3010, () => {
    console.log('server listening on port 3000');
});
