import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

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