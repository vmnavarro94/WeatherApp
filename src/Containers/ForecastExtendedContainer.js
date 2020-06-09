//package imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

//Local imports
import ForecastExtended from '../Components/ForecastExtended';

class ForecastExtendedContainer extends Component {
    render() {
        return this.props.city &&
               <ForecastExtended city={this.props.city}/> 
    }
}

ForecastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
};

const mapStateToProps = ({city}) => ({city});

export default connect(mapStateToProps, null)(ForecastExtendedContainer);