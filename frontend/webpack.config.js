const path = require('path');
const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'],
    fallback: {
      vm: require.resolve('vm-browserify'),
      process: require.resolve('process/browser'),
      stream: require.resolve('stream-browserify'),
      util: require.resolve('util'),
      crypto: require.resolve('crypto-browserify'),
      assert: require.resolve('assert'),
      zlib: require.resolve('browserify-zlib'),
      buffer: require.resolve('buffer'),
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser'),
      https: require.resolve('https-browserify'),
      http: require.resolve('stream-http'),
      querystring: require.resolve('querystring-es3'),
      fs: false,
      net: false,
      tls: false,
      child_process: false,
      http2: false,
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  mode: 'development',
};
