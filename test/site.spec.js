var app = require('../');
var request = require('supertest').agent(app.listen());

describe('our amazing site', function () {
    it('has a nice welcoming message', function (done) {
        request
            .get('/')
            .expect('hello from koa.')
            .end(done);
    });
});
