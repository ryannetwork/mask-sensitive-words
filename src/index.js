export const maskSensitiveWords=  (content, words) => (
    // 'The name of NX will be Nintendo ***'
    content.replace(
        new RegExp(words.join('|'), 'ig'),
        '***'
    )
)
