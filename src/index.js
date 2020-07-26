import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import loggerMiddleware from './middleware/logger'

const store = configureStore({
  reducer: rootReducer,
  middleware: [loggerMiddleware, ...getDefaultMiddleware()]
})

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
