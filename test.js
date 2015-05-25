'use strict';
var spawn = require('child_process').spawn;
var test = require('ava');
var viewport = require('./');

test('return viewports', function (t) {
	t.plan(2);

	viewport(['iphone 4', 'iphone 5'], function (err, res) {
		t.assert(!err, err);
		t.assert(res.length === 5, res.length);
	});
});

test('return all viewports', function (t) {
	t.plan(2);

	viewport(function (err, res) {
		t.assert(!err, err);
		t.assert(res.length > 50, res.length);
	});
});

test('return viewports using the CLI', function (t) {
	t.plan(2);

	var cp = spawn(__dirname + '/cli.js');

	cp.stdout.setEncoding('utf8');
	cp.stdout.on('data', function (data) {
		var res = data.indexOf('iphone 4,ios,5.1.1,320x480,2010-06');
		t.assert(data, data);
		t.assert(res !== -1, res);
	});

	cp.stdin.end('iphone4');
});
