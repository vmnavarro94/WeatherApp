//package imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//Local imports
import LocationList from '../Components/LocationList';
import { setCity } from '../Actions';

class LocationListContainer extends Component {

    handleSelectionLocation = city => {
        this.props.setCity(city);
    }

    render() {
        return (
            <LocationList 
              cities={this.props.cities}
              onSelectedLocation={this.handleSelectionLocation}/>           
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setCity(value))
});

export default connect(null, mapDispatchToProps)(LocationListContainer);