import convert from 'convert-units';
import * as WeatherStatus from '../Constants/WeatherStates';

const getTemp = kelvin => {
    return Number(convert(kelvin).from("K").to("C").toFixed(0));
}

const getWeatherState = weather => {
    const { id } = weather;
    if(id < 300) {
        return WeatherStatus.THUNDER;
    }
    else if (id < 400){
        return WeatherStatus.DRIZZLE;
    }
    else if (id < 600){
        return WeatherStatus.RAIN;
    }
    else if (id < 700){
        return WeatherStatus.SNOW;
    }
    else if(id === 800){
        return WeatherStatus.SUNNY;
    }
    return WeatherStatus.CLOUD;
    
}

const transformWeather = weatherData => {
    const {humidity, temp} = weatherData.main;
    const {speed} = weatherData.wind;
    const weatherState = getWeatherState(weatherData.weather[0]);
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