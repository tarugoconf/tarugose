module.exports = function (config) {
    // Layouts
    config.addLayoutAlias('default', 'layouts/base.njk');

    // Filters
    config.addFilter('dateFormat', require('./config/filters/date.js'));
    config.addFilter('md', require('./config/filters/markdown.js'));
    config.addFilter('type', require('./config/filters/typeset.js'));

    // Libs
    config.setLibrary('md', require('./config/markdown'));

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
