import React, { useState, useEffect } from 'react';

const FuncComp = ({ initNumber }) => {
  let funcStyle = 'color:aqua';
  let funcId = 0;
  let numberState = useState(initNumber);
  let number = numberState[0];
  let setNumber = numberState[1];

  let dateState = useState(JSON.stringify(new Date()));
  let date = dateState[0];
  let setDate = dateState[1];

  useEffect(() => {
    console.log('number');
    return () => {
      console.log('bye number!');
    };
  }, []);

  useEffect(() => {
    console.log('date');
    return () => {
      console.log('bye date!');
    };
  }, [date]);

  console.log('%cfunc => render ' + ++funcId, funcStyle);
  return (
    <div className="container">
      <h2>function style component</h2>
      <h3>Number : {number}</h3>
      <h3>Date : {date}</h3>
      <input
        type="button"
        value="random"
        onClick={() => {
          setNumber(Math.random());
        }}
      />
      <input
        type="button"
        value="date"
        onClick={() => {
          setDate(JSON.stringify(new Date()));
        }}
      />
    </div>
  );
};

export default FuncComp;
