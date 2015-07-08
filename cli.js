#!/usr/bin/env node
'use strict';
var meow = require('meow');
var getStdin = require('get-stdin');
var objToTable = require('obj-to-table');
var toCsv = require('to-csv');
var viewport = require('viewport-list');

var cli = meow({
	help: [
		'Usage',
		'  $ viewport-list [device]',
		'  $ viewport-list < <file>',
		'',
		'Example',
		'  $ viewport-list iphone4 iphone5',
		'  $ viewport-list < devices.txt',
		'',
		'Options',
		'  -p, --pretty    Print the results in a table'
	]
}, {alias: {p: 'pretty'}});

function run(input, opts) {
	viewport(input, function (err, devices) {
		if (err) {
			console.error(err.message);
			process.exit(1);
		}

		if (opts.pretty) {
			console.log(objToTable(devices).toString());
			return;
		}

		console.log(toCsv(devices));
	});
}

if (process.stdin.isTTY) {
	run(cli.input, cli.flags);
} else {
	getStdin(function (data) {
		[].push.apply(cli.input, data.trim().split('\n'));
		run(cli.input, cli.flags);
	});
}
