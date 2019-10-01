import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  static defaultProps = {
    companyName: 'WIRPO',
    companyLocation: 'BANGALORE'
  };

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h2>REACT JS PROPS</h2>

          <div>
            {this.props.companyName} Company, City: {this.props.companyLocation}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
