#!/usr/bin/env node
'use strict';

var meow = require('meow');
var getStdin = require('get-stdin');
var toCsv = require('to-csv');
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
			console.error(err.message);
			process.exit(1);
		}

		console.log(toCsv(devices));
	});
}

if (process.stdin.isTTY) {
	run(cli.input);
} else {
	getStdin(function (data) {
		[].push.apply(cli.input, data.trim().split('\n'));
		run(cli.input);
	});
}
