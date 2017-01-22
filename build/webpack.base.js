const path = require('path');
const root = path.resolve(__dirname, '../');

module.exports = {
    entry: {
        app: ['./src/index.scss', './src/index.js']
    },

    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'STable.js',
        publicPath: '/dist/'
    },

    resolve: {
        extensions: ['', '.js', '.css', '.scss']
    },

    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /(node_module|bower_components|libs|venders)/
            }
        ],
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /(node_module|bower_components|libs|venders)/,
                include: root
            },
            {
                test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name]-[hash:7].[ext]'
                }
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },

    plugins: [],

    eslint: {
        configFile: path.resolve(root, './.eslintrc'),
        formatter: require('eslint-friendly-formatter')
    }
};

