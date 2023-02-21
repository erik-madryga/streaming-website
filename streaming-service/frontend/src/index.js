import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {applyMiddleware, combineReducers, createStore} from 'redux'
import {Provider} from "react-redux"
import loginReducer from './modules/login'
import userReducer from './modules/user'
import movieReducer from './modules/movie'
import pictureReducer from './modules/picture'

const asyncMiddleware = storeAPI => next => action => {
    if (typeof action === 'function') {
        return action(storeAPI.dispatch, storeAPI.getState)
    }
    next(action)
}

const middlewareEnhancer = applyMiddleware(asyncMiddleware)
const rootReducer = combineReducers({loginReducer, userReducer, movieReducer, pictureReducer})
const store = createStore(rootReducer, middlewareEnhancer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);