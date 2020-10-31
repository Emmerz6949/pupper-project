
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
