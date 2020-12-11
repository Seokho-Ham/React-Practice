const { useRef } = require('react');
const React = require('react');

const WordRelay = () => {
  const [word, setWord] = React.useState('코코');
  const [value, setValue] = React.useState('');
  const [result, setResult] = React.useState('');
  const inputRef = useRef(null);

  const onSubmit = e => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setWord(value);
      setResult('딩동댕');
      setValue('');
    } else {
      setResult('땡');
      setValue('');
    }
    inputRef.current.focus();
  };
  const onChange = e => {
    setValue(e.target.value);
  };
  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmit}>
        <input type='text' value={value} onChange={onChange} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
