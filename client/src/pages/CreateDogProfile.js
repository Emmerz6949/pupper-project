import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import TextFieldSizes from "../components/test.js";
import SimpleTabs from "../components/menu.js";
import IconLabelButtonsProfile from "../components/button.js";
import ButtonAppBar from "../components/appBar.js";
import DiscreteSlider from "../components/dogSize.js";
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'; 
import CreateProfileBar from '../components/CreateProfileBar.js';




function CreateDogProfile() {
  
  return (

      <div>

        <CreateProfileBar />
        <TextFieldSizes />
        <DiscreteSlider />
        <center>
        <Link to='/dogschedule'>
        <IconLabelButtonsProfile/>
        </Link>
        </center>
        
        
       
      </div>
      
  );
}

export default CreateDogProfile;
