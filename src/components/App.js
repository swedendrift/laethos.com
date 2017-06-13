import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import InnovatePage from './InnovatePage';
import CreatePage from './CreatePage';
import OperatePage from './OperatePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
