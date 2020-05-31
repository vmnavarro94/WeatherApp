import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import * as WeatherStates from '../../../Constants/WeatherStates'
import './styles.css';

const WeatherData = () => (
    <div className='weatherDataCont'>
        <WeatherTemperature temperature={30} weatherState={WeatherStates.SUNNY}/>
        <WeatherExtraInfo humidity={20} wind={'10 m/s'}/>
    </div>
);

export default WeatherData;