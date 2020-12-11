### Webpack

- npm init
- npm i -D webpack webpack-cli (개발시에만 필요하다.)
- webpack.config.js (웹팩 환경설정 파일)

### Webpack 환경설정

- require하고 있는 파일들을 react에서 알아서 파악하기 때문에 여러 컴포넌트를 참조하고 있는 경우 참조하지 않아도 된다.
- webpack으로 빌드를 하려면 babel이 필수다. -> jsx를 처리하기 위해서.
  - babel 내부에서도 jsx를 설정해야한다.

### 속성

name
mode
devtool
resolve
entry
module
plugins
output

### babel

npm i -D
@babel/core : 기본적인 요소들
@babel/preset-env : 개발자의 브라우저에 맞게 최신 문법을 지원가능한 문법으로 변경시켜줌
@babel/preset-react : jsx를 사용할 수 있도록 해줌
babel-loader : 바벨과 웹팩을 연결해줌

### Webpack 자동 빌드

- npm i
  react-refresh
  @pmmmwh/react-refresh-webpack-plugin -D
  - 위의 플러그인이 없으면 그냥 reloading. -> 새로고침.
  - 있으면 hot-reloading. -> 기존의 데이터 유지
- 개발용 서버가 하나 필요
  - npm i -D webpack-dev-server

속성에 contentBase를 적용시켜야한다. -> 콘텐츠를 제공할 경로지정 (정적파일을 제공하려는 경우에만 필요)
