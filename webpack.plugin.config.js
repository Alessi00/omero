const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {AureliaPlugin} = require('aurelia-webpack-plugin');
const ProvidePlugin = require('webpack/lib/ProvidePlugin');

module.exports = {
  entry: {
    main: [
      './src/viewers/viewer/Viewer.js'
    ]
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'ol-viewer.js',
    library: 'openlayers_viewer',
  },
  plugins: [
    new ProvidePlugin({
        Promise: 'bluebird',
    }),
  ],
  resolve: {
      extensions: [".js"],
         modules: ["src", "node_modules"]
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader'},
      { test: /[\/\\]node_modules[\/\\]bluebird[\/\\].+\.js$/, loader: 'expose-loader?Promise' },
    ]
  },
};
