
import React from 'react';
import '../App.css';
import WalkerProfileInfo from '../components/WalkerProfileInfo.js';
import WalkButton from '../components/schedule components/WalkButton'; 
import EditButton from '../components/editButton.js';
import { Link } from 'react-router-dom'; 
import DogProfileBar from '../components/DogProfileBar.js';


function WalkerProfile() {


  return (

    
      <div>
        <DogProfileBar />
        <WalkerProfileInfo/>

        <center>
        <Link to='/walkerschedule'>
        <WalkButton/>
        </Link>

        <Link to='/createwalker'>
        <EditButton/>
        </Link>
        </center>
      </div>
   
  );
}

export default WalkerProfile;
