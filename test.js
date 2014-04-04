/*global describe, it */
'use strict';

var assert = require('assert');
var viewport = require('./');

describe('viewport()', function () {
    it('should return two viewports', function (cb) {
        viewport('iphone4s', function (err, res) {
            console.log(res);
            cb(assert.strictEqual(res.length, 2));
        });
    });
});
