const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'wordrelay-setting', //option
  mode: 'development', //실서비스 : production
  devtool: 'eval', //빠르게?//실서비스는 hidden-source-map
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
        //babel-loader에 대한 옵션들
        options: {
          //plugins들의 모음 :  presets
          presets: [
            [
              '@babel/preset-env',
              {
                //지원할 브라우저들의 버전을 타겟팅.
                //브라우저들의 목록들 : browserslist 페이지에서 볼 수 있음
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

  //출력(모아지는 하나의 파일)
  output: {
    path: path.join(__dirname, 'wordrelay/dist'),
    filename: 'app.js',
    publicPath: '/wordrelay/dist/',
  },
  //개발용 서버
  devServer: {
    contentBase: './wordrelay',
    publicPath: '/dist/',
    hot: true,
  },
};
