import jest from 'jest'
import {maskSensitiveWords} from '.' // imports index.js file by default

test('replaces blacklistee word with asterisks', () => (
    expect(maskSensitiveWords('The name of NX will be Nintendo SWitch', ['switch'])).toBe('The name of NX will be Nintendo ***')
))

test('replaces muliple blacklistee words with asterisks', () => (
    expect(maskSensitiveWords('The name of Scorpio will be Microsoft XBOXTWO. XBOXTWO will be released soon', ['XBOXTWO'])).toBe('The name of Scorpio will be Microsoft ***. *** will be released soon')
))
