#!/usr/bin/env node
'use strict';
var meow = require('meow');
var getStdin = require('get-stdin');
var toCsv = require('to-csv');
var Table = require('cli-table');
var windowSize = require('window-size');
var viewport = require('viewport-list');

var cli = meow({
	help: [
		'Usage',
		'  $ viewport-list [device] [--pretty]',
		'  $ viewport-list < <file>',
		'',
		'Example',
		'  $ viewport-list iphone4 iphone5',
		'  $ viewport-list < devices.txt',
		'  $ viewport-list iphone4 --pretty',
		'  $ viewport-list iphone4 -p',
		'  $ viewport-list -p < devices.txt',
		''
	]
});

function run(input, flags) {
	viewport(input, function (err, devices) {
		if (err) {
			console.error(err.message);
			process.exit(1);
		}

		if (flags && (flags.pretty || flags.p)) {
			var colWidth = Math.floor(windowSize.width / 6);
			var table = new Table({
			    head: ['name', 'platform', 'os', 'size', 'release']
			  , colWidths: [colWidth, colWidth, colWidth, colWidth, colWidth]
			});

			devices.forEach(function (device, index, array) {
				table.push(
					[device.name, device.platform, device.os, device.size, device.release]
				)
			});
			console.log(table.toString());
		} else {
			console.log(toCsv(devices));
		}
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
