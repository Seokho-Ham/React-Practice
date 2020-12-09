const path = require('path');

module.exports = {
  name: 'wordrelay-setting', //option
  mode: 'development', //실서비스 : production
  devtool: 'eval', //빠르게?
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  //중요!!
  //입력 (합칠 파일들)
  entry: {
    app: ['./wordrelay/client'],
  },
  //적용할 모듈
  module: {
    rules: [
      {
        test: /\.jsx?/, //jsx 파일에
        loader: 'babel-loader', //바벨 로더를 적용시킨다
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },

  //출력(모아지는 하나의 파일)
  output: {
    path: path.join(__dirname, 'wordrelay/dist'),
    filename: 'app.js',
  },
};
