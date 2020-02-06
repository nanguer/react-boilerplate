import React from 'react';
import { hot } from 'react-hot-loader';
import AppBody from './components/AppBody';
import NavMenu from './components/NavMenu';
import './styles/styles.scss';

const App = () => (
  <>
    <NavMenu />
    <AppBody />
  </>
);

export default hot(module)(App);
