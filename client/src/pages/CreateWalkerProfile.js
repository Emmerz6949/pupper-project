import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import TextFieldSizes from "../components/test.js";
import SimpleTabs from "../components/menu.js";
import IconLabelButtons from "../components/button.js";
import ButtonAppBar from "../components/appBar.js";
import DiscreteSlider from "../components/dogSize.js";
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Rout } from 'react-router-dom';
import DiscreteSliderWalker from "../components/dogSizeWalker.js";
import TextFieldSizesWalker from "../components/walkerForm.js";
import AlertDialog from "../components/pickWalker.js";
import AlertDialogWalker from "../components/walkerScheduleSet.js";
import IconLabelButtonsProfile from '../components/button.js';

function CreateWalkerProfile() {
  return (
  
    <Grid container direction="column" justify="center" alignItems="center" >
      <div className="App">
        <ButtonAppBar /> 
        <TextFieldSizesWalker />
        <DiscreteSliderWalker/>
        <IconLabelButtonsProfile/> 
        

      </div>
    </Grid>

  
  );
}

export default CreateWalkerProfile;
