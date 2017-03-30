'use strict';

var _jest = require('jest');

var _jest2 = _interopRequireDefault(_jest);

var _ = require('.');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// imports index.js file by default

test('replaces blacklistee word with asterisks', function () {
    return expect((0, _.maskSensitiveWords)('The name of NX will be Nintendo SWitch', ['switch'])).toBe('The name of NX will be Nintendo ***');
});

test('replaces muliple blacklistee words with asterisks', function () {
    return expect((0, _.maskSensitiveWords)('The name of Scorpio will be Microsoft XBOXTWO. XBOXTWO will be released soon', ['XBOXTWO'])).toBe('The name of Scorpio will be Microsoft ***. *** will be released soon');
});