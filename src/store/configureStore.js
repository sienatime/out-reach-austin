import { createStore, compose, applyMiddleware } from 'redux';

//Import rootReducer from reducers/index
import rootReducer from '../reducers/index';
import thunk from 'redux-thunk';

//import * as actionCreators from '../actions';
import { fetchEvents } from '../actions/eventActions';

//Empty Initial State to fill 
const initialState =  {
  
};

const middleware = [thunk];

//Create your store, using middle ware. 
const store = createStore(
  rootReducer, 
  initialState, 
  compose(
  applyMiddleware(...middleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

//Export the store
export default store; 

// //below works

// export default function configureStore(preloadedState) {
//   const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ &&
//     window.__REDUX_DEVTOOLS_EXTENSION__({ actionCreators });
//   if (!enhancer) {
//     console.warn('Install Redux DevTools Extension to inspect the app state: ' +
//       'https://github.com/zalmoxisus/redux-devtools-extension#installation')
//   }

//   const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//   const store = createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(thunk)));

//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('../reducers', () => {
//       const nextReducer = require('../reducers');
//       store.replaceReducer(nextReducer);
//     });
//   }

//   return store;
// }