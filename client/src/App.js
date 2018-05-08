import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardPanel from './components/CardPanel';
import FilterPanel from './components/FilterPanel';
import Navbar from './components/Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widgets: [
        {
          category: 'Prime',
          products: [
            {
              name: 'PrimeWidget1',
              description: 'This is prime widget 1',
              finish: 'green',
              size: 'Mini',
              quantity: 34,
            },
            {
              name: 'PrimeWidget2',
              description: 'This is prime widget 2',
              finish: 'red',
              size: 'Large',
              quantity: 34,
            },
          ],
        },
        {
          category: 'Extreme',
          products: [
            {
              name: 'ExtremeWidget1',
              description: 'This is extreme widget 1',
              finish: 'lightblue',
              size: 'Massive',
              quantity: 6,
            },
          ],
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <FilterPanel />
        <CardPanel widgets={this.state.widgets} />
      </div>
    );
  }
}

export default App;
