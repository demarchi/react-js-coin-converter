import React from 'react';
import './App.css';

import Conversor from "./components/converter"

function App() {
  return (
    <div className="App">
      <h1>Coin Converter in React JS</h1>
      <div className="row">
        <Conversor coinA="GBP" coinB="BRL"></Conversor>
        <Conversor coinA="BRL" coinB="GBP"></Conversor>
      </div>
      <div className="row">
        <Conversor coinA="USD" coinB="BRL"></Conversor>
        <Conversor coinA="BRL" coinB="USD"></Conversor>
      </div>
      <div className="row">
        <Conversor coinA="EUR" coinB="BRL"></Conversor>
        <Conversor coinA="BRL" coinB="EUR"></Conversor>
      </div>
    </div>
  );
}

export default App;
