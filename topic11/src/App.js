import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieID: 0,
      movieName: '',
      leadActor: '',
      leadActree: '',
      yearOfRelease: 0,
      language: '',
      collections: ''
    };
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>Topic 12: React JS Router</header>
        <h3>Movie Details Management</h3>
        MovieID, MovieName, LeadActor,
        LeadActree,YearOfRelease,Language,Collections
      </div>
    );
  }
}

export default App;
