/*global describe, it */
'use strict';

var assert = require('assert');
var viewport = require('./');

describe('viewport()', function () {
    it('should return viewports', function (cb) {
        viewport('iphone4', function (err, res) {
            cb(assert.strictEqual(res.length, 2));
        });
    });

    it('should return viewports using an array of keywords', function (cb) {
        viewport(['iphone4', 'iphone5'], function (err, res) {
            cb(assert.strictEqual(res.length, 5));
        });
    });
});
