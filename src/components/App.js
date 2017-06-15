import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import InnovatePage from './InnovatePage';
import CreatePage from './CreatePage';
import OperatePage from './OperatePage';

const App = () => (
      <Router>
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/innovate" component={InnovatePage}/>
          <Route path="/create" component={CreatePage}/>
          <Route path="/operate" component={OperatePage}/>
        </div>
      </Router>      
 );

export default App;
