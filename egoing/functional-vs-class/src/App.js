import React, { useState, useEffect } from 'react';
import './App.css';
import ClassComp from './components/ClassComp';
import FuncComp from './components/FuncComp';

function App() {
  const [funcShow, setFuncShow] = useState(true);
  const [classShow, setClassShow] = useState(true);
  // setFuncShow(!funcShow);
  return (
    <div className="container">
      <h2>Hello World</h2>
      <input
        type="button"
        value="func"
        onClick={() => {
          setFuncShow(!funcShow);
        }}
      />
      <input
        type="button"
        value="class"
        onClick={() => {
          setClassShow(!classShow);
        }}
      />
      {funcShow ? <FuncComp initNumber={2} /> : null}
      {classShow ? <ClassComp initNumber={4} /> : null}
    </div>
  );
}

export default App;
