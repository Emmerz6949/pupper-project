import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import DiscreteSliderWalker from "../components/dogSizeWalker.js";
import TextFieldSizesWalker from "../components/walkerForm.js";
import IconLabelButtonsProfile from '../components/button.js';
import CreateProfileBar from '../components/CreateProfileBar.js';
import API from '../utils/API';
import { useState } from 'react'; 

function CreateWalkerProfile() {

  const [walkerObj, setWalkerObj] = useState({
    firstName: '', 
    lastName: '', 
    zipCode: '', 
    dogSize: '', 
    email: '', 
    id: ''
  }); 

  //updates dog's information with owner and dog info
  const handleWalkerChange = (event) => { 
    const { firstName, lastName, zipCode, dogSize, email, id} = event.target; 
    setWalkerObj({ ...walkerObj, 
      [firstName]: firstName, 
      [lastName]: lastName,
      [zipCode]: zipCode, 
      [dogSize]: dogSize, 
      [email]: email, 
      [id]: id }); 
  }

  //upon submit
  const handleInputSubmit = (event) => { 
    event.preventDefault(); 

    if (walkerObj.firstName && walkerObj.zipCode && walkerObj.email) { 
      API.walker_profile({
        firstName: walkerObj.dogName, 
        lastName: walkerObj.lastName,
        zipCode: walkerObj.zipCode,
        dogSize: walkerObj.dogSize,
        email: walkerObj.email,
        id: walkerObj.id
      })
      .then(res => console.log(res))
      .catch(err => console.log(err)); 
    }
  }

  return (
  
      <div className="App">
        <CreateProfileBar /> 
        <TextFieldSizesWalker handleWalkerChange = {handleWalkerChange}/>
        <DiscreteSliderWalker handleWalkerChange = {handleWalkerChange}/>
        <Link to='/walkerprofile'>
        <IconLabelButtonsProfile handleInputSubmit = {handleInputSubmit} /> 
        </Link>
        
        

      </div>

  
  );
}

export default CreateWalkerProfile;
