#!/usr/bin/env node
'use strict';

var input = process.argv.slice(2);
var pkg = require('./package.json');
var stdin = require('get-stdin');
var viewport = require('./');

/**
 * Help screen
 */

function help() {
    console.log(pkg.description);
    console.log('');
    console.log('Usage');
    console.log('  $ viewport [device]');
    console.log('  $ cat <file> | viewport [device]');
    console.log('');
    console.log('Example');
    console.log('  $ viewport');
    console.log('  $ viewport iphone4 iphone5');
    console.log('  $ cat devices.txt | viewport');
}

/**
 * Show help
 */

if (input.indexOf('-h') !== -1 || input.indexOf('--help') !== -1) {
    help();
    return;
}

/**
 * Show package version
 */

if (input.indexOf('-v') !== -1 || input.indexOf('--version') !== -1) {
    console.log(pkg.version);
    return;
}

/**
 * Run
 */

function run(input) {
    if (input.length === 0) {
        viewport(function (err, devices) {
            if (err) {
                throw err;
            }

            console.log(devices);
        });
    } else {
        viewport(input, function (err, devices) {
            if (err) {
                throw err;
            }

            console.log(devices);
        });
    }
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
