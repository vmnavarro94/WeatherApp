import {createSelector} from 'reselect';

import {SET_FORECAST_DATA} from '../Actions';

export const cities = (state = {}, action) => {
    switch (action.type) {
        case SET_FORECAST_DATA:
            const {city, forecastData} = action.payload;
            return {...state, [city]: {forecastData, weather: null}};
    
        default:
            return state;
    }
};

//export const getForecastDataFromCities = (state, city) => state[city] ? state[city].forecastData : null;
export const getForecastDataFromCities = createSelector((state, city) => state[city] ? state[city].forecastData : null, forecastData => forecastData)