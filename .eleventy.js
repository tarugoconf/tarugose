// Markdown
const markdown = require('./config/markdown');
const yaml = require('js-yaml');

module.exports = function (config) {
    // Layouts
    config.addLayoutAlias('default', 'layouts/base.njk');

    // Filters
    config.addFilter('dateFormat', require('./config/filters/date.js'));
    config.addFilter('md', require('template-filters/markdown')(markdown));
    config.addFilter('attr', require('template-filters/attributes'));
    config.addFilter('class', require('template-filters/className'));

    // Libs
    config.setLibrary('md', markdown);

    // Data extensions
    config.addDataExtension('yaml', contents => yaml.safeLoad(contents));

    // Copy dirs
    config.addPassthroughCopy('site/img');
    config.addPassthroughCopy('site/js');
    config.addPassthroughCopy({ 'site/assets': '/' });
    config.addWatchTarget('site/css/');

    return {
        dir: {
            input: 'site',
            output: 'dist',
        },
        templateFormats: ['njk', 'md', '11ty.js'],
        htmlTemplateEngine: 'njk',
        markdownTemplateEngine: 'njk',
        passthroughFileCopy: true,
        pathPrefix: process.env.PATH_PREFIX || '/',
    };
};
