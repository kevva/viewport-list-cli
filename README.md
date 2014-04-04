# viewport-list [![Build Status](https://travis-ci.org/kevva/viewport-list.png?branch=master)](http://travis-ci.org/kevva/viewport-list)

> Return a list of devices and their viewports

## Install

```bash
npm install --save viewport-list
```

## Usage

```js
var viewport = require('viewport-list');

viewport('iphone4s', function (err, items) {
    console.log(items);
    // => [{ name: 'iphone4s', platform: 'iOS', os: '4.3.5', size: '320x480', release: '2011-10' }]
});
```

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) © [Kevin Mårtensson](https://github.com/kevva)
