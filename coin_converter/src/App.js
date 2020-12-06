import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Converter from "./Components/Converter"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Coin Converters</h1>
        <div className="row">
          <Converter coinFrom ="USD" coinTo="BRL"></Converter>
          <Converter coinFrom ="BRL" coinTo="USD"></Converter>
        </div>

        <div className="row">
          <Converter coinFrom ="CAD" coinTo="BRL"></Converter>
          <Converter coinFrom ="BRL" coinTo="CAD"></Converter>
        </div>

        <div className="row">
          <Converter coinFrom ="EUR" coinTo="BRL"></Converter>
          <Converter coinFrom ="BRL" coinTo="EUR"></Converter>
        </div>
      </div>
    );
  }
}

export default App;
