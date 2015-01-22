#!/usr/bin/env node
'use strict';

var csv = require('to-csv');
var meow = require('meow');
var stdin = require('get-stdin');
var viewport = require('./');

var cli = meow({
	help: [
		'Usage',
		'  viewport-list [device]',
		'  viewport-list < <file>',
		'',
		'Example',
		'  viewport-list iphone4 iphone5',
		'  viewport-list < devices.txt'
	].join('\n')
});

function run(input) {
	viewport(input, function (err, devices) {
		if (err) {
			console.error(err);
			process.exit(1);
		}

		console.log(csv(devices));
	});
}

if (process.stdin.isTTY) {
	run(cli.input);
} else {
	stdin(function (data) {
		[].push.apply(cli.input, data.trim().split('\n'));
		run(cli.input);
	});
}
