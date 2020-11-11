const path = require('path');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', //실서비스 : production
  devtool: 'eval', //빠르게 하겠다는 것
  resolve: {
    extensions: ['.js', '.jsx'], //파일의 확장자를 미리 적어두면 webpack이 알아서 찾음.
  },
  entry: {
    app: ['./components/client.jsx'],
  }, //입력
  module: {
    rules: [
      {
        //js, jsx 파일에 babel loader을 적용한다.
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'), //현재 경로 + dist
    filename: 'App.js',
  }, //출력
};

//동작과정 : entry에 있는 파일을 읽고 모듈을 적용한 후 output에 뺀다.
