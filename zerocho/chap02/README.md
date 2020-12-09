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
