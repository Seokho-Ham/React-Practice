const React = require('react');

const Gugudan = () => {
  const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult('정답: ' + value);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
    } else {
      setResult('땡');
      setValue('');
    }
  };
  const onChange = e => {
    e.preventDefault();
    setValue(e.target.value);
  };
  return (
    <div>
      {first} 곱하기 {second}는?
      <form onSubmit={onSubmit}>
        <input type='number' value={value} onChange={onChange} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </div>
  );
};

module.exports = Gugudan;
