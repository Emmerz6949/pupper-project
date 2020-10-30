import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import TextFieldSizes from "../components/test.js";
import SimpleTabs from "../components/menu.js";
import IconLabelButtonsProfile from "../components/button.js";
import ButtonAppBar from "../components/appBar.js";
import DiscreteSlider from "../components/dogSize.js";
import Grid from '@material-ui/core/Grid';



function CreateDogProfile() {
  return (

    <Grid container direction="column" justify="center" alignItems="center" >
      <div>
        <ButtonAppBar />
        <TextFieldSizes />
        <DiscreteSlider />

 
        <IconLabelButtonsProfile/>
        
        
          
      </div>
    </Grid>
  );
}

export default CreateDogProfile;
