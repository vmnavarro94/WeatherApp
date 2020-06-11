import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';


const renderForecasItemDays = (forecastData) => {
    return forecastData.map(forecast => {
        const {weekDay, hour, data} = forecast;
        return (<ForecastItem 
            key={`${weekDay}${hour}`}
            weekDay={weekDay}
            hour={hour}
            data={data}/>)
    });
}

const renderProgress = () => {
    return <h3>Loaging forecaster...</h3>;
}

const ForecastExtended = ({city, forecastData}) =>
(
    <div>
        <h3 className='forecast-title'>Forecast Extended for {city}</h3>
        {
            forecastData ?
            renderForecasItemDays(forecastData) :
            renderProgress()
        }
        </div>
);


ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array,
}

export default ForecastExtended;