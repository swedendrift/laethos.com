import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducers/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

window.store = createStore(reducer);

//  const store = createStore(
//    reducer, /* preloadedState, */
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//  );

ReactDOM.render(
  <Provider store={window.store}>
    <App/>
  </Provider>
  , document.querySelector('#root'));

registerServiceWorker();
