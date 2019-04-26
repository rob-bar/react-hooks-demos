import React, { useState, useEffect, useRef } from 'react';
import Counter from './Counter';
const App = () => {
  const divRef = useRef();

  return (
    <div className="main-wrapper" ref={divRef}>
      <h1 onClick={e => divRef.current.classList.add('new-fake-class')}>
        useReducer
      </h1>
      <Counter />
    </div>
  );
};

export default App;
