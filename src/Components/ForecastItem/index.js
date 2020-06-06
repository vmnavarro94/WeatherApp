import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from '../WeatherLocation/WeatherData';

const ForecastItem = ({weekDay, hour, data}) => (
    <div>
        <h3>{weekDay} - Hour: {hour} hs</h3>
        <WeatherData data={data}/>
    </div>
);

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
}

export default ForecastItem;