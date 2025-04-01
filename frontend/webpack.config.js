const path = require("path");

module.exports = {
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "assert": require.resolve("assert"),
      "zlib": require.resolve("browserify-zlib"),
      "buffer": require.resolve("buffer"),
      "util": require.resolve("util"),
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
      "https": require.resolve("https-browserify"),
      "http": require.resolve("stream-http"),
      "querystring": require.resolve("querystring-es3"),
      "fs": false, // fs não é suportado no navegador
      "net": false, // net não é suportado no navegador
      "tls": false, // tls não é suportado no navegador
      "child_process": false, // child_process não é suportado no navegador
      "http2": false // http2 não é suportado no navegador
    }
  }
};