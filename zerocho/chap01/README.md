### Webpack의 역할

- 쪼개진 js파일을 html에서 읽어서 사용할 수 있는 파일로 합쳐주는 역할.

- https://unpkg.com : npm에 있는 모듈을 쉽게 가져와서 사용할 수 있는 페이지
  ex) https://unpkg.com/:package@:version/:file

### Gugudan 컴포넌트

- 가능하면 jsx문법과 html 문법을 섞어서 사용하지 말아라.

  - 메서드를 따로 분리해서 작성 후 html 속성에 넣을것.

- 쓸데없는 div 태그를 사용하지 않으려면 Fragment를 쓸것.
- form 이들어가면 onSubmit, form이 없으면 onClick
- 메서드를 따로 만들어서 사용할 경우 arrow function을 써야한다.
  - 안그러면 this를 바인딩해야한다.
- constructor없이 state를 바로 선언해서 사용하는것이 실무에서는 대부분.

setState안에 콜백 함수를 넣을 수 있다. -> prevState를 사용가능하다.

- 새로운 state값에 기존의 state를 사용할 경우 콜백으로 사용하는 것을 추천.
- React가 화면을 관리할 수 있도록 하고, 개발자는 데이터만 관리하도록 코드를 짤것.
  - dom 에 접근하고 싶을때는 ref 속성을 사용해서 접근하면 좋다.
