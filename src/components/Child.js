import React, { useState } from "react";

export const Child = props => {
  const [data, setData] = useState({
    name: "",
    lastName: "Hintz",
    age: ""
  });

  const loadNewData = () => {
    setData({
      ...data,
      name: "Dagusa",
      age: 28
    });
  };

  const { name: propsName, lastName: propsLastname } = props;
  const { name, lastName, age } = data;

  return (
    <div className="app">
      <h1>Person Data</h1>
      <p>Name: {name}</p>
      <p>Last Name: {lastName} </p>
      <p>Age: {age} </p>

      <button onClick={loadNewData}>Load new data</button>
    </div>
  );
};

export default Child;
