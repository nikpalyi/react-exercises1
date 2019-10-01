import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import addMovie from './addMovie';
import MovieID from './MovieID';

import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

const routing = (
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/MovieID' component={MovieID} />
      <Route path='/addMovie' component={addMovie} />
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/MovieID'>MovieID</Link>
        </li>
        <li>
          <Link to='/addMovie'>addMovie</Link>
        </li>
      </ul>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
