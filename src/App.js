import React from "react";
import { hot } from 'react-hot-loader';
import { Header } from './Components/Header/Header';
import './GlobalStyle.css';

class App extends React.Component {
  render() {
    return (
      <Header />
    );
  }
}

export default hot(module)(App);
