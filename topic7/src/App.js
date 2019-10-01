import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const name = 23;

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Props validation</h1>
        </header>
        <Data name={name} />
      </div>
    );
  }
}

const Data = props => {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      console.log({props.name})<h1>You live in {props.prefferedCities}.</h1>
      <h1>You are {props.age} old.</h1>
    </div>
  );
};

Data.defaultProps = {
  name: 'Steve',
  prefferedCities: ['Bangalore', 'Chennai'],
  age: 's'
};

Data.propTypes = {
  name: PropTypes.string.isRequired,
  prefferedCities: PropTypes.array,
  age: function(props, propName, componentName) {
    if (
      props[propName] <= 18 ||
      (props[propName] >= 60 || props[propName] !== PropTypes.number)
    ) {
      return new Error('Invalid');
    }
  }
};

export default App;
