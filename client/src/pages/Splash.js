import React from 'react';
import '../App.css';
import SplashDogButton from '../components/SplashDogButton.js';
import Pupper_logo_splash_01 from '../Pupper_logo_splash_01.svg';
import SplashWalkerButton from '../components/SplashWalkerButton';
import SplashCreateButton from '../components/SplashCreateButton';
import { Link } from 'react-router-dom'; 


function Splash() {
  return (
        <div 
        style={{
        backgroundColor: '#61dafb',
        width: '100%',
        height: '100vh'
      }}
      >

<center><img className="Splash-image" src={Pupper_logo_splash_01} alt="A"/></center>

<Link to= '/doglogin'>
<center>< SplashDogButton/></center>
</Link>

<Link to='/walkerlogin'>
<center>< SplashWalkerButton/></center>
</Link>


<Link to='/signup'>
<center>< SplashCreateButton/></center>
</Link>

</div>


     
        
      );
    }
    
   

export default Splash;


