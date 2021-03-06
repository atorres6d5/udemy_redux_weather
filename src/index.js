import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reduxPromise from 'redux-promise'
import reducers from './reducers'



const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore)

ReactDOM.render(
  <Provider store = { createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
