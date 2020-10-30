import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import SignIn from '../src/pages/SignIn'; 
import DogSchedule from '../src/pages/DogSchedule'; 
import WalkerSchedule from '../src/pages/WalkerSchedule';
import CreateDogProfile from '../src/pages/CreateDogProfile'; 

import WalkerProfile from '../src/pages/WalkerProfile'; 
import DogProfile from '../src/pages/DogProfile'; 

ReactDOM.render(
  <Router>
    <Route path='/signin' component={SignIn} />

    <Route path='/dogprofile' component={DogProfile} />

    <Route path='/walkerprofile' component={WalkerProfile} />

    <Route path='/walkerschedule' component={WalkerSchedule} />

    <Route path='/dogschedule' component={DogSchedule} />

    <Route path='/createdog' component={CreateDogProfile} />
  </Router>, 

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
