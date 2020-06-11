import {url_base_forecast, api_key} from '../Constants/api_url';
import getUrlWeatherByCity from '../services/getUrlWeatherByCity';
import transformWeather from '../services/transformWeather'
import transformForecast from '../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const SET_WEATHER = 'SET_WEATHER';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';

export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';

const setCity = payload => ({type: SET_CITY, payload: payload});
const setForecastData = payload => ({type: SET_FORECAST_DATA, payload});

const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload});

export const setSelectedCity = payload => {
    return (dispatch, getState) => {
        const url_forecast = `${url_base_forecast}?q=${payload}&appid=${api_key}`;

        //activate a data search indicator on the state
        dispatch(setCity(payload));

        const state = getState();
        const date = state.cities[payload] ? state.cities[payload].forecastDataDate : new Date();

        const now = new Date();

        if(now - date < 1 * 60 * 1000)
            return;

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

export const setWeather = payload => {
    return dispatch => {
        payload.forEach(city => {

            dispatch(getWeatherCity(city));

            fetch(getUrlWeatherByCity(city)).then(resolve => {
                return resolve.json();
            }).then(data => {
                const weather = transformWeather(data);
                
                dispatch(setWeatherCity({city, weather}));    
            });
        });
    };
};