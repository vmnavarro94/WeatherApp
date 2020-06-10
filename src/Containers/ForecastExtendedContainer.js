//package imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

//Local imports
import ForecastExtended from '../Components/ForecastExtended';

class ForecastExtendedContainer extends Component {
    render() {
        const {city, forecastData} = this.props;
        return city &&
               <ForecastExtended city={city} forecastData={forecastData}/> 
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
};

const mapStateToProps = ({city, cities}) => ({city, forecastData: cities[city] ? cities[city].forecastData : null});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);