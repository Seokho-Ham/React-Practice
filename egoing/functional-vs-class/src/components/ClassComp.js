import React, { Component } from 'react';

class ClassComp extends Component {
  state = {
    number: this.props.initNumber,
    date: JSON.stringify(new Date()),
  };

  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
        <h3>Number : {this.state.number}</h3>
        <h3>Date : {this.state.date}</h3>
        <input
          type="button"
          value="random"
          onClick={() => {
            this.setState({ number: Math.random() });
          }}
        />
        <input
          type="button"
          value="date"
          onClick={() => {
            this.setState({ date: JSON.stringify(new Date()) });
          }}
        />
      </div>
    );
  }
}

export default ClassComp;
