import React, { Component } from 'react';

function getNumbers() {}

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(),
    tries: [],
  };

  onSubmitForm = () => {};
  onChangeInput = () => {};

  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input
            type='text'
            maxLength={4}
            value={this.state.value}
            onChange={this.onChangeInput}
          />
          <button>입력</button>
        </form>
        <div>시도: {this.state.tries.length}</div>
        {/* <ul>
          {this.state.tries.map(el => {
            return <li>{el}</li>;
          })}
        </ul> */}
      </>
    );
  }
}

export default NumberBaseball;
