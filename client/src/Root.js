import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reduxThunk from 'redux-thunk';
import reducers from 'reducers';

export default ({ children, initialState = {} }) => {

    if(initialState.auth === undefined) {
        initialState.auth = {};
    }
    if(initialState.auth.authenticated === undefined) {
        initialState.auth.authenticated = localStorage.getItem('token');
    }
    console.log(initialState);

    const store = createStore(
        reducers,
        initialState,
        applyMiddleware(reduxThunk, reduxPromise)
    );
    // TODO: reduxThunk or reduxPromise?


    return (
        <Provider store={store}>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </Provider>
    );
};