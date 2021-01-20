// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import rootReducer from './rootReducer';
// import logger from 'redux-logger';
// import { isDevEnv } from '../configs';

// const middleware = isDevEnv()
//     ? composeWithDevTools(applyMiddleware(thunk, logger))
//     : applyMiddleware(thunk);

// const configureStore = () => {
//     const store = createStore(
//         rootReducer,
//         middleware
//     );

//     if (isDevEnv() && module.hot) {
//         // Enable Webpack hot module replacement for reducers
//         module.hot.accept('./rootReducer', () => {
//             const nextRootReducer = require('./rootReducer').default;
//             store.replaceReducer(nextRootReducer);
//         });
//     }

//     return store;
// };

// export default configureStore;
