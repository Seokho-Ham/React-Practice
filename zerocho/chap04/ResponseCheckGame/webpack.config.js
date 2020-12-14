const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
module.exports = {
  name: 'responseCheck-setting',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: ['./client.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['> 5% in KR'],
                },
              },
            ],
            '@babel/preset-react',
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            'react-refresh/babel',
          ],
        },
      },
    ],
  },
  plugins: [new RefreshWebpackPlugin()],
  output: {
    path: path.join(__dirname, ''),
    filename: 'app.js',
    publicPath: '/',
  },

  devServer: {
    // contentBase: './',
    publicPath: '/',
    hot: true,
  },
};
