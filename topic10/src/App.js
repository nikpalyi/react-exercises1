import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { physics: 0, chemistry: 0, biology: 0, mathematics: 0 };
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { physics, chemistry, biology, mathematics } = this.state;
    let subjects = [physics, chemistry, biology, mathematics];
    let sum = subjects.reduce((previous, current) => (current += previous));
    let avg = sum / subjects.length;
    alert('Your subjects are: ' + avg);
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          Topic 10: React JS – Forms & Topic 11: React JS - Events
        </header>
        <h3>Enter your individual subject marks for the subjects:</h3>
        <form onSubmit={this.handleSubmit}>
          <tr>
            <label>
              Physics:
              <input
                type='text'
                name='physics'
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          </tr>
          <tr>
            <label>
              Chemistry:
              <input
                type='text'
                name='chemistry'
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          </tr>
          <tr>
            <label>
              Biology:
              <input
                type='text'
                name='biology'
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          </tr>
          <tr>
            <label>
              Mathematics:
              <input
                type='text'
                name='mathematics'
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input type='submit' value='Submit' />
          </tr>
        </form>
      </div>
    );
  }
}

export default App;
