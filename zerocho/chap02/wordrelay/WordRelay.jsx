const React = require('react');
const { Component } = React;

class WordRelay extends Component {
  state = {
    word: '코코',
    value: '',
    result: '',
  };
  input;
  onRefInput = c => {
    this.input = c;
  };
  onChange = e => {
    this.setState({
      value: e.target.value,
    });
  };
  onClick = e => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState(prevState => ({
        word: prevState.value,
        value: '',
        result: '딩동댕',
      }));
    } else {
      this.setState({
        value: '',
        result: '땡',
      });
    }
    this.input.focus();
  };
  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onClick}>
          <input
            ref={this.onRefInput}
            type='text'
            value={this.state.value}
            onChange={this.onChange}
          ></input>
          <button>입력</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}

module.exports = WordRelay;
