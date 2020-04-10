# mozjpeg-bin-plus

IMPORTANT: THIS IS A FORK OF 'mozjpeg', TO MAKE SOURCE URL CONFIGURABLE! WON'T UPDATE! IF YOU CAN ACCESS GITHUB NATURALLY, YOU WON'T NEED THIS!

> [mozjpeg](https://github.com/mozilla/mozjpeg) is a production-quality JPEG encoder that improves compression while maintaining compatibility with the vast majority of deployed decoders

You probably want [`imagemin-mozjpeg`](https://github.com/imagemin/imagemin-mozjpeg) instead.


## Install

before install, you can config source url manually by

```
$ npm config set mozjpeg_url "https://your_own_mirror"
```

```
$ npm install mozjpeg-plus
```

## Usage

```js
const {execFile} = require('child_process');
const mozjpeg = require('mozjpeg-plus');

execFile(mozjpeg, ['-outfile', 'output.jpg', 'input.jpg'], err => {
	console.log('Image minified!');
});
```


## CLI

```
$ npm install --global mozjpeg
```

```
$ mozjpeg --help
```


## License

MIT © [Imagemin](https://github.com/imagemin)
