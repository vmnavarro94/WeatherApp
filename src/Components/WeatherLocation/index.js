import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import PropTypes from 'prop-types';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather'
import getUrlWeatherByCity from '../../services/getUrlWeatherByCity';

import './styles.css';

class WeatherLocation extends Component{

    constructor(props){
        super(props);
        const {city} = props;
        this.state = {
            city,
            data: null,
        };
    }

    componentDidMount() {
        this.handleUpdate();
    }

    handleUpdate = () => {
        const api_weather = getUrlWeatherByCity(this.state.city);
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeatherData = transformWeather(data);
            this.setState({
                data: newWeatherData,
            });
        });
    }

    render(){
        //console.log("render");
        const {onWeatherLocationClick} = this.props;
        const {city, data} = this.state;
        return (
            <div className='weatherLocationCont' onClick={onWeatherLocationClick}>
                <Location city={city}/>
                {data ? 
                    <WeatherData data={data}/> : 
                    <CircularProgress size={50}/>
                }
            </div>
        );
    }   
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func,
}

export default WeatherLocation;