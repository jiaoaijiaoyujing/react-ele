var path = require('path');
module.exports = {
  entry: ['whatwg-fetch', './app.js'],
  output: {
    filename: 'bundle.js',
    publicPath: ''
  },
  resolve: {
    // add alias for application code directory
    alias:{
      '~': path.resolve(__dirname)
    },
    extensions: [ '', '.js' ]
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
