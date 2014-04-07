# viewport-list [![Build Status](https://travis-ci.org/kevva/viewport-list.png?branch=master)](http://travis-ci.org/kevva/viewport-list)

> Return a list of devices and their viewports

## Install

```bash
$ npm install --save viewport-list
```

## Usage

```js
var viewport = require('viewport-list');

viewport('iphone4s', function (err, items) {
    console.log(items);
    // => [{ name: 'iphone4s', platform: 'iOS', os: '4.3.5', size: '320x480', release: '2011-10' }]
});
```

## CLI

You can also use it as a CLI app by installing it globally:

```bash
$ npm install --global viewport-list
```

### Usage

```bash
$ viewport --help

Usage
  $ viewport [device]
  $ cat <file> | viewport [device]

Example
  $ viewport
  $ viewport iphone4 iphone5
  $ cat devices.txt | viewport
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) © [Kevin Mårtensson](https://github.com/kevva)
