import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import * as WeatherStatus from '../../Constants/WeatherStates';
import './styles.css';

const data = {
    temperature: 30,
    weatherState: WeatherStatus.SUNNY,
    humidity: 80,
    wind: '10m/s',
}

const data2 = {
    temperature: 23,
    weatherState: WeatherStatus.CLOUD,
    humidity: 30,
    wind: '25m/s',
}
class WeatherLocation extends Component{

    constructor(){
        super();
        this.state = {
            city: "Zapopan",
            data: data,
        };
    }
    
    handleUpdateClick = () => {
        console.log("Actualizado");
        this.setState({
            city: 'Queretaro',
            data: data2,
        });
    }
    
    render(){
        const {city, data} = this.state;
        return (
            <div className='weatherLocationCont'>
                <Location city={city}/>
                <WeatherData data={data}/>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        );
    }   
}

export default WeatherLocation;