import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import TextFieldSizes from "../components/test.js";
import SimpleTabs from "../components/menu.js";
import IconLabelButtonsProfile from "../components/button.js";
import ButtonAppBar from "../components/appBar.js";
import DiscreteSlider from "../components/dogSize.js";
import Grid from '@material-ui/core/Grid';
import SplashDogButton from '../components/SplashDogButton.js';
import Pupper_logo_splash_01 from '../Pupper_logo_splash_01.svg';
import SplashWalkerButton from '../components/SplashWalkerButton';
import SplashCreateButton from '../components/SplashCreateButton';

function Splash() {
  return (
        <div 
        style={{
        backgroundColor: '#61dafb',
        width: '100%',
        height: '100vh'
      }}
      >

<center><img class="Splash-image" src={Pupper_logo_splash_01} alt="A"/></center>

< SplashDogButton/>
< SplashWalkerButton/>
< SplashCreateButton/>
</div>


     
        
      );
    }
    
   

export default Splash;


