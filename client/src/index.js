import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Splash from '../src/pages/Splash'; 
import SignUp from '../src/pages/SignUp';
import WalkerLogin from './pages/WalkerLogin';
import DogLogin from './pages/DogLogin'; 
import DogSchedule from '../src/pages/DogSchedule'; 
import WalkerSchedule from '../src/pages/WalkerSchedule';
import CreateDogProfile from '../src/pages/CreateDogProfile'; 
import CreateWalkerProfile from '../src/pages/CreateWalkerProfile'; 
import WalkerProfile from '../src/pages/WalkerProfile'; 
import DogProfile from '../src/pages/DogProfile'; 

ReactDOM.render(
  <Router>

    <Switch>
      <Route exact path= '/' component={Splash} />

      <Route path='/doglogin' component={DogLogin} />

      <Route  path='/walkerlogin' component={WalkerLogin} />

      <Route path='/signup' component={SignUp} />

      <Route path='/dogprofile' component={DogProfile} />

      <Route path='/walkerprofile' component={WalkerProfile} />

      <Route path='/walkerschedule' component={WalkerSchedule} />

      <Route path='/dogschedule' component={DogSchedule} />

      <Route exact path='/createdog' component={CreateDogProfile} />

      <Route exact path='/createwalker' component={CreateWalkerProfile} />
    </Switch>

  </Router>, 

  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
