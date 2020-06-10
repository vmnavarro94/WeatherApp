import {url_base_forecast, api_key} from '../Constants/api_url';
import transformForecast from '../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({type: SET_CITY, payload: payload});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url_base_forecast}?q=${payload}&appid=${api_key}`;

        //activate a data search indicator on the state
        dispatch(setCity(payload));

        return fetch(url_forecast).then(resolve => {
            return resolve.json();
        }).then(data =>{
            const forecastData = transformForecast(data);
            console.log(forecastData);

            // modify the state with the promise' result
            dispatch(setForecastData({city: payload, forecastData}));
        });
    };
};