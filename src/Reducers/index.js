import {combineReducers} from 'redux';

import {cities, getForecastDataFromCities as _getForecastDataFromCities} from './cities';
import {city} from './city';


const reducers = combineReducers({
    city,
    cities
});

export default reducers;

export const getCity = state => state.city;
export const getForecastDataFromCities = state => _getForecastDataFromCities(state.cities, getCity(state));
