const path = require('path');

module.exports = {
  entry: {
    index: './src/js/index.js',
    destination: './src/js/index.js',
    crew: './src/js/index.js',
    technology: './src/js/index.js',
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[contenthash].js',
    clean: true,
  }
}