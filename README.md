
#Install
``` shell
//npm
$ npm install mask-sensitive-words --save

//yarn
$ yarn add mask-sensitive-words
```
#Examples

``` javascript
const {maskSensitiveWords} = require('mask-sensitive-words');
//ES2015 syntax
import {maskSensitiveWords} from 'mask-sensitive-words';


const sentence = 'The name of Scorpio will be Microsoft XBOXTWO. XBOXTWO will be released soon';
const words2Mask = ['XBOXTWO']
const maskedSentence = maskSensitiveWords(sentence, words2Mask)
console.log(maskedSentence);
//The name of Scorpio will be Microsoft ***. *** will be released soon

```
