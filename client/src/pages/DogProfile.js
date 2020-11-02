import React from 'react';
import '../App.css';
import EditButton from '../components/editButton.js';
import DogProfileInfo from '../components/DogProfileInfo.js';
import WalkButton from '../components/schedule components/WalkButton'; 
import { Link } from 'react-router-dom'; 
import DogProfileBar from '../components/DogProfileBar.js';

function DogProfile() {
  return (

    
      <div>
         
        <DogProfileBar />
        <DogProfileInfo/>



        <center>
        <Link to='/dogschedule'>
        <WalkButton/>
        </Link>
        
        <Link to='/createdog'>
        <EditButton/>
        </Link>
        </center>
       
      </div>
      
);
}

export default DogProfile;
