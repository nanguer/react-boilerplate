import React, { useState } from "react";

export default () => {
  const name = "is Working!";

  return (
    <div className="app-body">
      <div>
        <h1>React Application Boilerplate</h1>
      </div>
      <div>
        <p>Application: {name}</p>
      </div>
    </div>
  );
};
