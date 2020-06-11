//package imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Local imports
import LocationList from '../Components/LocationList';
import { setSelectedCity, setWeather } from '../Actions';
import {getWeatherCities, getCity} from '../Reducers';

class LocationListContainer extends Component {

    componentDidMount() {
        const {setWeather, setCity, cities, city} = this.props;

        setWeather(cities);
        setCity(city);
    }

    handleSelectionLocation = city => {
        this.props.setCity(city);
    }

    render() {
        return (
            <LocationList 
              cities={this.props.citiesWeather}
              onSelectedLocation={this.handleSelectionLocation}/>           
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state),
});

const mapDispatchToProps = dispatch => ({
    setCity: city => dispatch(setSelectedCity(city)),
    setWeather: cities => dispatch(setWeather(cities)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);