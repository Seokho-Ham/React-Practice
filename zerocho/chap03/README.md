### 숫자야구

### import와 require 차이

- require : node의 모듈 시스템
  - module.exports에 우리가 넣은 파일을 다른 파일에서 require을 통해 사용할 수 있다.
- import를 사용할 때는 export를 통해 넣을 수 있다.
  - export default 는 한번만 사용할 수 있다.
  ```
  export default foo; -> import 'foo';
  export.bar = foo; -> import {bar} from 'foo';
  ```

### map 함수

- 각 태그에 반드시 key를 작성해줘야한다. -> 리액트에서 성능최적화를 하는데 사용한다.
- 반드시 key는 고유한 값. ex) id값.

### 컴포넌트 분리와 props

- 입문자는 Top-Down 방식으로. 큰 컴포넌트를 만들고 이후 기능들을 추가해나갈 것.
- 컴포넌트는 최대한 분리시킬것.

### 메서드 바인딩

- 메서드를 화살표 함수로 사용하지 않으면 this 바인딩이 필요하다.
  why? -> 함수를 선언할 때 this에 바인딩할 객체가 정적으로 결정되기 때문에.
  일반함수는 호출 시 동적으로 this가 변하지만 화살표 함수는 항상 상위 스코프의 this를 가리킨다.
- 그냥 함수로 선언하는 경우, constructor에서 this바인딩을 해줄 것.
