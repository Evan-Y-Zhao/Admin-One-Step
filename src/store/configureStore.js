import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from '../reducers'
import initialState from '../reducers/initialState'

function configureStoreProd() {
    const middlewares = [
        // Add other middleware on this line...

        // thunk middleware can also accept an extra argument to be passed to each thunk action
        // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
        thunk,
    ];

    return createStore(rootReducer, initialState, compose(
        applyMiddleware(...middlewares)
    )
    );
}

function configureStoreDev() {
    const middlewares = [
        // Add other middleware on this line...
        // Redux middleware that spits an error on you when you try to mutate your state either inside a dispatch or between dispatches.

        // thunk middleware can also accept an extra argument to be passed to each thunk action
        // https://github.com/reduxjs/redux-thunk#injecting-a-custom-argument
        thunk,
        logger,
    ];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
    const store = createStore(rootReducer, initialState, composeEnhancers(
        applyMiddleware(...middlewares)
    ));

    return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
