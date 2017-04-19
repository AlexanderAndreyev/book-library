var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: {
    app: ['babel-polyfill', path.join(__dirname, 'client/src/client')]
  },
  output: {
    path: path.join(__dirname, 'client/dist'),
    filename: '[name].bundle.js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: [ '.js']
  },
  module: {
    rules: [
      {
         test: /\.js$/,
         exclude: /node_modules/,
         use: 'babel-loader'
       },
      {
        test:/\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test:/\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test:/\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader'
      },
      {
        test:/\.(jpe?g|png|gif|svg)$/i,
        use: 'url-loader'
      },
      {
        test: /\.ttf$/,
        use: 'file-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "client/dist"),
    port: 3000,
    stats: "errors-only",
    open: true,
  }
}
