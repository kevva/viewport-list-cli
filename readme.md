# viewport-list [![Build Status](http://img.shields.io/travis/kevva/viewport-list.svg?style=flat)](https://travis-ci.org/kevva/viewport-list)

> Return a list of devices and their viewports


## Install

```
$ npm install --save viewport-list
```


## Usage

Pass in a optional keyword which is a device name from [this list](http://viewportsizes.com).

```js
var viewport = require('viewport-list');

viewport(['iphone 4s'], function (err, items) {
	console.log(items);
	//=> [{name: 'iphone 4s', platform: 'iOS', os: '4.3.5', size: '320x480', release: '2011-10'}]
});
```


## API

### viewport([items], callback)

#### items

Type: `array`  
Default: `[]`

An array of device names to fetch.

#### callback(err, ret)

Type: `function`

##### ret

Type: `array`

An array of objects containing devices and their attributes.


## CLI

```
$ npm install --global viewport-list
```

```bash
$ viewport-list --help

  Usage
    $ viewport-list [device]
    $ viewport-list < <file>

  Example
    $ viewport-list iphone4 iphone5
    $ viewport-list < devices.txt
```


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
