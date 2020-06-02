const typeset = require('typeset');

module.exports = (string) => typeset(string, {
    disable: ['hyphenate']
});
