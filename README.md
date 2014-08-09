# viewport-list [![Build Status](https://travis-ci.org/kevva/viewport-list.svg?branch=master)](https://travis-ci.org/kevva/viewport-list)

> Return a list of devices and their viewports

## Install

```bash
$ npm install --save viewport-list
```

## Usage

Pass in a optional keyword which is a device name from [this list](http://viewportsizes.com).

```js
var viewport = require('viewport-list');

viewport('iphone 4s', function (err, items) {
    if (err) {
        throw err;
    }
    
    console.log(items);
    // => [{ name: 'iphone 4s', platform: 'iOS', os: '4.3.5', size: '320x480', release: '2011-10' }]
});
```

## CLI

```bash
$ npm install --global viewport-list
```

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

MIT © [Kevin Mårtensson](https://github.com/kevva)
