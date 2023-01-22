const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Autoprefixer = require("autoprefixer");

const baseCssLoaders = (cssLoaderOptions = {}) => ([
    {
        loader: MiniCssExtractPlugin.loader,
    },
    {
        loader: 'css-loader',
        options: {
            ...cssLoaderOptions,
            modules: cssLoaderOptions.modules ? {
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
                exportLocalsConvention: 'asIs',
                exportGlobals: true
            } : false
        }
    }
]);

const advancedCssLoaders  = (cssLoaderOptions = {}) => ([
    ...baseCssLoaders(cssLoaderOptions),
    {
        loader:  "postcss-loader",
        options: {
            postcssOptions: {
                plugins: [
                    Autoprefixer
                ]
            }
        }
    },
    {
        loader: 'sass-loader'
    }
]);

module.exports = ({
    baseCssLoaders,
    advancedCssLoaders
})
