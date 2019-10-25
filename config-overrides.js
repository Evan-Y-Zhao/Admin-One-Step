const { override, fixBabelImports, addWebpackAlias, addLessLoader } = require('customize-cra');

const path = require('path');
const srcRoot = path.resolve(__dirname, 'src');

const alias = {
    Actions: srcRoot + '/actions',
    Reducers: srcRoot + '/reducers',
    Components: srcRoot + '/components',
    Pages: srcRoot + '/pages',
    Images: srcRoot + '/images',
    Misc: srcRoot + '/misc',
    Stylesheets: srcRoot + '/stylesheets',
    Utils: srcRoot + '/utils',
    Form: srcRoot + '/form',
    Langs: srcRoot + '/langs',
}

const contomizeOverride = () => config => {
    // if(config.mode === 'production') config.output.publicPath = '/admin/'
    return config;
};

module.exports = {
    webpack: override(
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: true,
        }),
        addWebpackAlias(alias),
        addLessLoader({
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#D42222', '@heading-color': '#34250D', '@menu-bg': '#393939', '@menu-item-color': '#fff', '@menu-item-active-bg': '#555759', '@menu-highlight-color': '#fff' },
        }),
        contomizeOverride()
    ),
    paths: function (paths, env) {
        // ...add your paths config
        return paths;
    },
};