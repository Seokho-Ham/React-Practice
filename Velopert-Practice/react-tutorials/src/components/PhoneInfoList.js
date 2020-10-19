import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
  };
  render() {
    const { data, onRemove, onUpdate } = this.props;
    console.log('renderingList');
    const list = data.map(info => {
      return (
        <PhoneInfo
          info={info}
          key={info.id}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      );
    });
    return <div>{list}</div>;
  }
}

export default PhoneInfoList;
