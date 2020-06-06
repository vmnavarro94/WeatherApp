import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from '../services/transformForecast';
import './styles.css';

const api_url = "http://api.openweathermap.org/data/2.5/forecast";
const api_key = '6c1e8757b9d05f8f0068f6b08ddf3d11';

/*const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

const data = {
    temperature: 10,
    humidity: 50,
    weatherState: 'sunny',
    wind: '10 m/s'
};*/

class ForecastExtended extends Component {
    
    constructor(){
        super();
        this.state = {
            forecastData: null,
        };
    }

    renderForecasItemDays() {
        const {forecastData} = this.state;
        return forecastData.map(forecast => {
            const {weekDay, hour, data} = forecast;
            return (<ForecastItem 
                key={`${weekDay}${hour}`}
                weekDay={weekDay}
                hour={hour}
                data={data}/>)
        });
    }
    
    renderProgress(){
        return <h3>Loaging forecaster...</h3>;
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city)
        {
            this.setState({forecastData: null});
            this.updateCity(nextProps.city);
        }
    }

    updateCity = city => {
        const url_forecast = `${api_url}?q=${city}&appid=${api_key}`;
        fetch(url_forecast).then(resolve => {
            return resolve.json();
        }).then(data =>{
            console.log(data);
            const forecastData = transformForecast(data);
            console.log(forecastData);
            this.setState({forecastData});
        });
    }

    componentDidMount() {
        this.updateCity(this.props.city);
    }
    

    render() {
        const {city} = this.props;
        const {forecastData} = this.state;
    return (
        <div>
            <h3 className='forecast-title'>Forecast Extended for {city}</h3>
            {forecastData ?
                this.renderForecasItemDays() :
                this.renderProgress()
            }
        </div>
    );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;