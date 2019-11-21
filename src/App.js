import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import Header from './components/header/Header';
import Routes from './routes/Routes';
import rootReducer from './reducers';
import rootSaga from './sagas/index';
import './App.css';


const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const enhancers = applyMiddleware(...middlewares);
//TODO: change to compose
const composedEnhancers = composeWithDevTools(enhancers);

const store = createStore(rootReducer, {}, composedEnhancers);


function App() {
  return (
    <Provider store={store} >
      <Router>
        <Header />
        <Routes />
      </Router>
    </Provider>
  );
}

sagaMiddleware.run(rootSaga);

export default App;
