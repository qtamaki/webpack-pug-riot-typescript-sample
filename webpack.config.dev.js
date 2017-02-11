var path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/ts/main.js',
  },
  output: {
    path: path.resolve(__dirname, 'publish'),
    filename: './js/[name].js',
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".tag"]
  },
  module: {
    rules: [
      {
          test: /\.js[x]?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
              cacheDirectory: true,
              presets: ['react', 'es2015']
          }
      },
      {
         test: /\.tag$/,
         enforce: "pre",
         exclude: /node_modules/,
         loader: 'riotjs-loader',
         query: { template: 'pug' }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [{loader: "ts-loader"}],
      }
    ]
  },
  plugins: [
      new webpack.ProvidePlugin({
          jQuery: "jquery"
      })
  ]
}
