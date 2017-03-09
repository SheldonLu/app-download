var path = require('path');

module.exports = {
  entry: './local_index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0',
        exclude: /node_modules/
      }
    ]
  }
};
