import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import transformWeather from '../../services/transformWeather'
import {api_weather} from '../../Constants/api_url';
import './styles.css';

class WeatherLocation extends Component{

    constructor(){
        super();
        this.state = {
            city: "Zapopan",
            data: null,
        };
        console.log("constructor");
    }

    componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }
    
    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    handleUpdateClick = () => {
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
        console.log("render");
        const {city, data} = this.state;
        return (
            <div className='weatherLocationCont'>
                <Location city={city}/>
                {data ? 
                    <WeatherData data={data}/> : 
                    <CircularProgress size={50}/>
                }
            </div>
        );
    }   
}

export default WeatherLocation;