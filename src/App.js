import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import {Grid, Col, Row} from 'react-flexbox-grid';
import LocationListContainer from './Containers/LocationListContainer';
import ForecastExtended from './Components/ForecastExtended';

import './App.css';
const cities = [
  'Zapopan,mx',
  'Tonala,mx',
  'Sidney,au',
  'Tokyo,jp',
  'Madrid,es',
  'Washington,us',
  'Turin,it',
  'Berlin,de',
  'Prague,cz',
  'Oslo,no'
];

class App extends Component{

  constructor(){
    super();
    this.state = {
      city: null,
    }
  }

  render(){
    const {city} = this.state;
    return (
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h6' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationListContainer cities={cities}/>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {
                  city ? 
                  <ForecastExtended city={city}/> : 
                  <h4>City has not been selected</h4>
                }
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;