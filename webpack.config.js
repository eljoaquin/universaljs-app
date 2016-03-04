module.exports = {
    devtool: 'eval',
    entry: './client.jsx',
    output: {
        path: __dirname + '/public/dist',
        filename: 'bundle.js',
        publicPath: '/dist/'
    },
    module: {
        loaders: [{
            test: /\.jsx$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['react', 'es2015']
            }
        }]
    }
};