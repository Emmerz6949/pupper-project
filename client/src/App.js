import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateWalkerProfile from './pages/CreateWalkerProfile';
import WalkerProfile from './pages/WalkerProfile.js';
import DogProfile from './pages/DogProfile.js';


function App() {
  return (
    <div className="App">
     
        <WalkerProfile />
        <DogProfile/>

        
     
    </div>
  );
}

export default App;
