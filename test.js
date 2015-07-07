'use strict';
var childProcess = require('child_process');
var test = require('ava');

test(function (t) {
	t.plan(2);

	childProcess.execFile('./cli.js', ['--version'], {cwd: __dirname}, function (err, stdout) {
		t.assert(!err, err);
		t.assert(stdout.trim() === require('./package.json').version);
	});
});
