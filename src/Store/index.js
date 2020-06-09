import {createStore} from 'redux';
import {cityReducer} from '../Reducers/city';

const initialState = {
    city: 'Zapopan,mx',
};

export const store = createStore(cityReducer, initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());