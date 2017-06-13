import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/HomePage';
import InnovatePage from './components/InnovatePage';
import CreatePage from './components/CreatePage';
import OperatePage from './components/OperatePage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="innovate" component={InnovatePage} />
    <Route path="create" component={CreatePage} />
    <Route path="operate" component={OperatePage} />
  </Route>
);