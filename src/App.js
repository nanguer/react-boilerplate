import React from "react";
import { hot } from "react-hot-loader";
import Child from "./components/Child";
import "./styles/styles.scss";

const App = () => {
  return <Child />;
};

export default hot(module)(App);
