import React, { useState, useEffect } from 'react';

const App = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    document.title = name;
  });

  return (
    <div className="main-wrapper">
      <h1>useEffect</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
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

export default App;
