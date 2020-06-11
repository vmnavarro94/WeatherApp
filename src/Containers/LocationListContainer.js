//package imports
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Local imports
import LocationList from '../Components/LocationList';
import * as actions from '../Actions';
import {getWeatherCities, getCity} from '../Reducers';

class LocationListContainer extends Component {

    componentDidMount() {
        const {setWeather, setSelectedCity, cities, city} = this.props;

        setWeather(cities);
        setSelectedCity(city);
    }

    handleSelectionLocation = city => {
        this.props.setSelectedCity(city);
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
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state),
});

/*
const mapDispatchToProps = dispatch => ({
    setSelectedCity: city => dispatch(setSelectedCity(city)),
    setWeather: cities => dispatch(setWeather(cities)),
});*/

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);