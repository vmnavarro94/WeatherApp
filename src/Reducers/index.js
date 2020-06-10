import {combineReducers} from 'redux';

import {cities} from './cities';
import {city} from './city';


const reducers = combineReducers({
    city,
    cities
});

export default reducers;