import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';
const LocationList = ({cities, onSelectedLocation}) => {
    const handleWeatherLocactionClick = city => {
        onSelectedLocation(city);
    }
    const getCitiesComponents = cities => (
        cities.map( (city) => 
            (
                <WeatherLocation 
                    city={city} 
                    key={city}
                    onWeatherLocationClick={() => handleWeatherLocactionClick(city)}/>))
    );
 
    return (<div className='locationList'>
                {getCitiesComponents(cities)}
            </div>);
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
};

export default LocationList;