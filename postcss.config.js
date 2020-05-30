module.exports = {
    plugins: {
        'postcss-import': {},
        'postcss-url': {},
        'postcss-preset-env': {
            stage: 0,
            features: {
                'custom-properties': false,
            },
        },
    },
};
