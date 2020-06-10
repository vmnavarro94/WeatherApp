import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import {cityReducer} from '../Reducers/city';

const initialState = {
    city: 'Zapopan,mx',
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(cityReducer, initialState, composeEnhancers(applyMiddleware(thunk)));