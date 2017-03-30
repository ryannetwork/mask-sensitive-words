'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var maskSensitiveWords = exports.maskSensitiveWords = function maskSensitiveWords(content, words) {
    return (
        // 'The name of NX will be Nintendo ***'
        content.replace(new RegExp(words.join('|'), 'ig'), '***')
    );
};