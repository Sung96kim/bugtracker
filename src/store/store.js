import { applyMiddleware, createStore } from 'redux';
// import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import logger from 'redux-logger'; // eslint-disable-line no-unused-vars

const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(thunk, logger);
}

const store = composeWithDevTools(applyMiddleware(...middlewares))(createStore)(rootReducer);

export default store;