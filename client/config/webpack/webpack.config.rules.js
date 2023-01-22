const {
    baseCssLoaders,
    advancedCssLoaders,
} = require('./webpack.config.loaders');

module.exports = () => ([
    {
        test: /\.css$/,
        include: /node_modules/,
        use: baseCssLoaders()
    },
    {
        test: /[\\/][a-z].[^\\/]*?\.scss$/,
        use: advancedCssLoaders({
            url: false,
            importLoaders: 1,
            modules: true
        })
    },
    {
        test: /[\\/][A-Z].[^\\/]*?\.scss$/,
        use: advancedCssLoaders({
            url: false,
            importLoaders: 1,
            modules: true
        })
    },
    {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
    },
    {
        test: /\.(png|jpe?g|gif|jp2|webp)$/,
        loader: "file-loader",
        options: {
            name: "[name].[ext]",
        },
    },
    {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    },
])