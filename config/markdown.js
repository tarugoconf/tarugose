const markdownIt = require('markdown-it');
const markdownItAttrs = require('markdown-it-attrs');

const options = {
    html: true,
};

module.exports = markdownIt(options).use(markdownItAttrs);
