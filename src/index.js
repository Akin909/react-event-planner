import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import rootReducer from './reducers/index.js';
import App from './components/app.js';
import './index.css';


const Wrapper = styled.div`
  height: 100%;
  border: solid 1px red;
`

/* eslint-disable no-underscore-dangle */
const store = createStore(
 rootReducer,
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
