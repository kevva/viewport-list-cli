#!/usr/bin/env node
'use strict';

var csv = require('to-csv');
var input = process.argv.slice(2);
var pkg = require('./package.json');
var stdin = require('get-stdin');
var viewport = require('./');

/**
 * Help screen
 */

function help() {
	console.log([
		'',
		'  ' + pkg.description,
		'',
		'  Usage',
		'    viewport [device]',
		'    cat <file> | viewport',
		'',
		'  Example',
		'    viewport iphone4 iphone5',
		'    cat devices.txt | viewport'
	].join('\n'));
}

/**
 * Show help
 */

if (input.indexOf('-h') !== -1 || input.indexOf('--help') !== -1) {
	return help();
}

/**
 * Show package version
 */

if (input.indexOf('-v') !== -1 || input.indexOf('--version') !== -1) {
	return console.log(pkg.version);
}

/**
 * Run
 */

function run(input) {
	viewport(input, function (err, devices) {
		if (err) {
			console.error(err);
			process.exit(1);
		}

		console.log(csv(devices));
	});
}

/**
 * Apply arguments
 */

if (process.stdin.isTTY) {
	run(input);
} else {
	stdin(function (data) {
		[].push.apply(input, data.trim().split('\n'));
		run(input);
	});
}
