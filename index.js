var koa = require('koa');
var app = module.exports = koa();
var defaultPort = 3000;

var port = process.env.PORT || (process.argv[2] || defaultPort);

app.use(function* () {
    this.body = 'hello from koa.';
});

// Prevent double listening, as described here http://www.marcusoft.net/2015/10/eaddrinuse-when-watching-tests-with-mocha-and-supertest.html
if (!module.parent) {
    app.listen(port);
}

console.log('listening on port ' + port);
