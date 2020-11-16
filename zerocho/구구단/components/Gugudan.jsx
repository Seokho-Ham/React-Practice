const React = require('react');
const { Fragment } = React;

const Gugudan = () => {
  const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState('');
  const inputRef = React.useRef(null);

  const onChangeInput = e => {
    setValue(e.target.value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      setResult('정답 : ' + value);
    } else {
      setValue('');
      setResult('땡');
    }
    inputRef.current.focus();
  };

  return (
    <Fragment>
      <div>
        {first} 곱하기 {second}는?
      </div>
      <form onSubmit={onSubmit}>
        <input
          ref={inputRef}
          type='number'
          value={value}
          onChange={onChangeInput}
        />
        <button>입력!</button>
      </form>
      <div id='result'>{result}</div>
    </Fragment>
  );
};

module.exports = Gugudan;
