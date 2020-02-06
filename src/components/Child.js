import React from 'react';

export const Child = () => {
  const name = 'is Working!';

  return (
    <div className="app">
      <h1>React Application Boilerplate</h1>
      <p>
        Application:
        {name}
      </p>
    </div>
  );
};

export default Child;
