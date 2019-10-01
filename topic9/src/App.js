import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { div: '' };
  }

  componentWillMount() {
    console.log('I am about to say bye, will be unmouting');
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ div: 'Awesome' });
    }, 1000);
  }

  componentWillUnmount() {}

  shouldComponentUpdate() {
    return true;
  }
  changeWord = () => {
    this.setState({ div: 'Brilliant' });
  };

  componentDidUpdate() {
    document.getElementById('mydiv').innerHTML =
      '..The updated div is ' + this.state.div;
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>React JS - Component Life Cycle</header>
        <button type='button' onClick={this.changeWord}>
          Change word
        </button>
        <p>{this.state.div} Monday for Everyone!</p>
        <div id='mydiv'>Hello..</div>
      </div>
    );
  }
}

export default App;
