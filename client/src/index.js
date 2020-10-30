import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'; 
import SignUp from '../src/pages/SignUp';
import Login from '../src/pages/login';
import DogSchedule from '../src/pages/DogSchedule'; 
import WalkerSchedule from '../src/pages/WalkerSchedule';
import CreateDogProfile from '../src/pages/CreateDogProfile'; 
import CreateWalkerProfile from '../src/pages/CreateWalkerProfile'; 
import WalkerProfile from '../src/pages/WalkerProfile'; 
import DogProfile from '../src/pages/DogProfile'; 

ReactDOM.render(
  <Router>

    <Route exact path='/login' component={Login} />

    <Route path='/signup' component={SignUp} />

    <Route path='/dogprofile' component={DogProfile} />

    <Route path='/walkerprofile' component={WalkerProfile} />

    <Route path='/walkerschedule' component={WalkerSchedule} />

    <Route path='/dogschedule' component={DogSchedule} />

    <Route path='/createdog' component={CreateDogProfile} />

    <Route path='/createwalker' component={CreateWalkerProfile} />
  </Router>, 

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
