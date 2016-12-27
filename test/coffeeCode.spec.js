var should = require('should');
var fill = require('../lib/coffeeCode.js');
describe('coffee script is compiled', function () {
    it('when this passed', function () {
        var output = fill('mug', 'coffee');
        console.log('output ' + output);
        output.should.equal('filling the mug with coffee');
    });
});
