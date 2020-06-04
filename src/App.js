import React, { Component } from 'react';
import './App.css';
import LocationList from './Components/LocationList';

const cities = [
  'Zapopan,mx',
  'Sidney,au',
  'Tokyo,jp',
  'Madrid,es',
  'Washington,us'
];

class App extends Component{

  handleSelectionLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  }

  render(){
    return (
      <div className="App">
        <LocationList cities={cities}
          onSelectedLocation={this.handleSelectionLocation}/>
      </div>
    );
  }
}

export default App;
