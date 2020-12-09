### Gugudan (React Hooks Component)

- state를 하나씩 분리해준다.

  - useState를 사용해서 변수를 선언한다. 인자로는 초기값을 지정해준다.
  - 각 state를 위한 set 메서드가 존재한다.

- ref는 React.useRef()를 사용하면 된다.

가장 큰 차이점은 setState와 ref

- state가 바뀌면 컴포넌트로 사용되는 함수 자체가 재실행되기 때문에 성능상 조금 느릴 수 있다.
- hooks도 마찬가지로 callback 함수를 사용할 수 있다.

### Webpack

- npm init
- npm i -D webpack webpack-cli (개발시에만 필요하다.)
- webpack.config.js (웹팩 환경설정 파일)

### Webpack 환경설정

- require하고 있는 파일들을 react에서 알아서 파악하기 때문에 여러 컴포넌트를 참조하고 있는 경우 참조하지 않아도 된다.
- webpack으로 빌드를 하려면 babel이 필수다. -> jsx를 처리하기 위해서.
  - babel 내부에서도 jsx를 설정해야한다.

### babel

npm i -D
@babel/core : 기본적인 요소들
@babel/preset-env : 개발자의 브라우저에 맞게 최신 문법을 지원가능한 문법으로 변경시켜줌
@babel/preset-react : jsx를 사용할 수 있도록 해줌
babel-loader : 바벨과 웹팩을 연결해줌
