import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import './styles.css';

const icons = {
    sunny: "day-sunny",
    fog: "day-fog",
    cloud: "cloud",
    cloudy: "cloudy",
    rain: "rain",
    snow: "snow",
    windy: "windy"
};

const getWeatherIcon = weatherState => {
    const icon = icons[weatherState];
    if(icon)
        return <WeatherIcons name={icon} size="2x"/>
    return <WeatherIcons name={icons.sunny} size="2x"/>
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div className='weatherTemperatureCont'>
        {getWeatherIcon(weatherState)}
        <span>{`${temperature}°C`}</span>
    </div>
);
WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;