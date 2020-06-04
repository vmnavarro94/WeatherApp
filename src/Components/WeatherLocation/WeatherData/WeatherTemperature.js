import React from 'react';
import WeatherIcons from 'react-weathericons';
import * as WeatherStates from '../../../Constants/WeatherStates';
import PropTypes from 'prop-types';

const icons = {
    [WeatherStates.SUNNY]: "day-sunny",
    [WeatherStates.CLOUD]: "cloud",
    [WeatherStates.RAIN]: "rain",
    [WeatherStates.SNOW]: "snow",
    [WeatherStates.DRIZZLE]: "day-showers",
    [WeatherStates.THUNDER]: "day-thunderstorm",
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    const sizeIcon = '4x';
    if(icon)
        return <WeatherIcons name={icon} size={sizeIcon}/>
    return <WeatherIcons name={icons.sunny} size={sizeIcon}/>
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className='weatherTemperatureCont'>
        {getWeatherIcon(weatherState)}
        <span className='temperature'>{temperature}</span>
        <span className='temperatureType'>{'°C'}</span>
    </div>
);
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;