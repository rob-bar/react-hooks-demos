import React, { useState, useEffect } from 'react';

const Demo4 = () => {
  const [name, setName] = useTitleInput('');

  return (
    <div className="main-wrapper">
      <h1>Custom Hook - useTitleInput</h1>
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

// TODO move to hooks/useTitleInput.js while in demo
function useTitleInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    document.title = value;
  });

  return [value, setValue];
}

export default Demo4;
