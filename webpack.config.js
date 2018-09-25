const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
module.exports = {
  entry: path.resolve(__dirname, 'src') + '/js/app.js',
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'app.js',
      publicPath: '/public/'
      },
      module: {
        rules : [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader"
        }
      }
    ]
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()]
  },
  mode: 'production',
  watch: true
};
