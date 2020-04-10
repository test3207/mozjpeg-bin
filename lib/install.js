'use strict';
const log = require('logalot');
const bin = require('.');
const path = require('path');


bin.run(['-version']).then(() => {
	log.success('mozjpeg pre-build test passed successfully');
}).catch(error => {
	log.warn(error.message);
	log.warn('using a pre-build')
	// If there is a connection error, won't build from source. Use a built one, in case lack of make lib, which frequently occur.
	bin.dest(path.join(__dirname, '../vendor', process.platform));
});
