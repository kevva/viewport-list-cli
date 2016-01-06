#!/usr/bin/env node
'use strict';
const meow = require('meow');
const getStdin = require('get-stdin');
const objToTable = require('obj-to-table');
const toCsv = require('to-csv');
const viewport = require('viewport-list');

const cli = meow({
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
	viewport(input).then(devices => {
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
	getStdin().then(data => {
		[].push.apply(cli.input, data.trim().split('\n'));
		run(cli.input, cli.flags);
	});
}
