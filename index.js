'use strict';

var scrambleText = require('scramble-text');

exports.name = 'scramble-text';
exports.outputFormat = 'html';
exports.inputFormats = ['scramble-text', 'html'];
exports.render = scrambleText({type: 'jade'})