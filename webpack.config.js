const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'manifest.json', to: '' },
        {
          from: 'src/images/*',
          to: '',
          transformPath(targetPath) {
            return targetPath.slice(4);
          },
        },
        {
          from: 'src/popup/*.html',
          to: '',
          transformPath(targetPath) {
            return targetPath.slice(4);
          },
        },
        {
          from: 'src/popup/*.css',
          to: '',
          transformPath(targetPath) {
            return targetPath.slice(4);
          },
        },
      ],
    }),
  ],
  entry: {
    background: './src/background/index.js',
    pink: './src/background/pink.js',
    contentscript: './src/contentscript.js',
    popup: './src/popup/popup.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/chrome-extension',
  },
};
