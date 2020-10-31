import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import TextFieldSizes from "../components/test.js";
import SimpleTabs from "../components/menu.js";
import IconLabelButtonsProfile from "../components/button.js";
import ButtonAppBar from "../components/appBar.js";
import DiscreteSlider from "../components/dogSize.js";
import Grid from '@material-ui/core/Grid';
import WalkerProfileInfo from '../components/WalkerProfileInfo.js';
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
