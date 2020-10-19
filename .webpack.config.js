var webpack = require('webpack');
module.exports = {
  entry: __dirname + 'app/index.jsx',
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.(mp3)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: 'audios/[name].[ext]',
          limit: 10
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  },
  plugins: []
};
