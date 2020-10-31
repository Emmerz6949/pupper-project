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
import API from '../utils/API';
import { useState } from 'react'; 

function CreateDogProfile() {
  const [dogObj, setDogObj] = useState({
    dogName: '', 
    lastName: '', 
    zipCode: '', 
    dogSize: '', 
    email: '', 
    id: ''
  }); 

  //updates dog's information with owner and dog info
  const handleDogChange = (event) => { 
    const { dogName, lastName, zipCode, dogSize, email, id} = event.target; 
    setDogObj({ ...dogObj, 
      [dogName]: dogName, 
      [lastName]: lastName,
      [zipCode]: zipCode, 
      [dogSize]: dogSize, 
      [email]: email, 
      [id]: id }); 
  }

  //upon submit
  const handleDogSubmit = (event) => { 
    event.preventDefault(); 

    if (dogObj.dogName && dogObj.zipCode && dogObj.email) { 
      API.owner_profile({
        dogName: dogObj.dogName, 
        lastName: dogObj.lastName,
        zipCode: dogObj.zipCode,
        dogSize: dogObj.dogSize,
        email: dogObj.email,
        id: dogObj.id
      })
      .then(res => console.log(res))
      .catch(err => console.log(err)); 
    }
  }

  return (

      <div>
        <CreateProfileBar />
        <TextFieldSizes handleDogChange = {handleDogChange} />
        <center>
        <DiscreteSlider />
        <Link to='/dogprofile'>
        <IconLabelButtonsProfile handleDogSubmit ={handleDogSubmit} />
        </Link>
        </center>
      </div>
      
  );
}

export default CreateDogProfile;
