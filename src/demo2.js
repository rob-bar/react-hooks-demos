import React, { useState } from 'react';
import Toggle from './Toggle';

const App = () => {
  // const [value, setValue] = useState(initialState);
  const [name, setName] = useState('');

  return (
    <div className="main-wrapper">
      <h1>useState - FormSubmit & Class refactor</h1>
      <Toggle />
      <br />
      <br />
      <form
        onSubmit={e => {
          e.preventDefault();
          formSubmit(name, setName);
        }}
      >
        <input
          type="text"
          onChange={e => setName(e.target.value)}
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

const formSubmit = (name, setName) => {
  console.log(`email sent to ${name}`);
  setName('');
};

export default App;
