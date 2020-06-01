import convert from 'convert-units';
import * as WeatherStatus from '../Constants/WeatherStates';

const getTemp = kelvin => {
    return convert(kelvin).from("K").to("C").toFixed(2);
}

const getWeatherState = weather_data => {
    return WeatherStatus.SUNNY;
}

const transformWeather = weatherData => {
    const {humidity, temp} = weatherData.main;
    const {speed} = weatherData.wind;
    const weatherState = WeatherStatus.SUNNY;
    const temperature = getTemp(temp);
    
    const data = {
        humidity,
        temperature,
        weatherState,
        wind: `${speed} m/s`
    };

    return data;
}

export default transformWeather;