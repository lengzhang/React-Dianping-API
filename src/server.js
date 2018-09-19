var express = require('express');
var http = require('http');

var app = express();
var server = http.createServer(app);

var helmet = require('helmet');
app.use(helmet());

app.get('/', (req, res) => {
    res.send('Get request to homepage');
});

app.use('/api', require('./route'));

server.listen(3000, () => {
    console.log('server listening on port 3000');
});
