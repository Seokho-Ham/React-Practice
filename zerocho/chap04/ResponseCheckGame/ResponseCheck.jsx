import React, { Component } from 'react';

class ResponseCheck extends Component {
  state = {
    state: 'waiting',
    message: '클릭해서 시작하세요.',
    result: [],
  };
  timeout;
  starttime;
  endtime;

  onClickScreen = () => {
    const { state, message, result } = this.state;
    if (state === 'wating') {
      this.setState({
        state: 'ready',
        message: '초록색이 되면 클릭하세요',
      });
      this.timeout = setTimeout(() => {
        this.setState({
          state: 'now',
          message: '지금 클릭',
        });
        this.starttime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000);
    } else if (state === 'ready') {
      clearTimeoout(this.timeout);
      this.setState({
        state: 'waiting',
        message: '이런, 성급하셨군요.',
      });
    } else if (state === 'now') {
      this.endtime = new Date();
      this.setState(prevState => ({
        state: 'waiting',
        result: [...prevState.result, this.endtime - this.starttime],
        message: '클릭해서 시작하세요.',
      }));
    }
  };

  renderAverage = () => {
    const { result } = this.state;
    return result.length === 0 ? null : (
      <div>
        평균시간 :
        {this.state.result.reduce((a, c) => a + c) / this.state.result.length}ms
      </div>
    );
  };

  render() {
    const { state, message } = this.state;
    return (
      <>
        <div id='screen' className={state} onClick={this.onClickScreen}>
          {message}
        </div>
        {this.renderAverage()}
      </>
    );
  }
}

export default ResponseCheck;
