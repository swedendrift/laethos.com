import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import InnovatePage from './InnovatePage';
import CreatePage from './CreatePage';
import OperatePage from './OperatePage';

import Page from './Page';

const App = () => (
      <Router>
        <div>
          <Route exact path="/" component={HomePage}/>
          <Route path="/innovate" render={() => <Page pageName="innovate"/>}/>
          <Route path="/create" render={() => <Page pageName="create"/>}/>
          <Route path="/operate" render={() => <Page pageName="operate"/>}/>
        </div>
      </Router>      
 );

export default App;
