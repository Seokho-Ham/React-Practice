import React from 'react';
import ReactDOM from 'react-dom';
import NumberBaseball from './NumberBaseball';
import HooksBaseball from './hooks/NumberBaseball';
ReactDOM.render(
  <>
    <NumberBaseball /> <HooksBaseball />
  </>,
  document.querySelector('#root'),
);
