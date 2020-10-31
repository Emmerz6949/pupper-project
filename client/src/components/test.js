import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 370,
      
    },
  },
}));

export default function TextFieldSizesDog(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      
      <div style={{ paddingBottom: '0px', paddingTop: '60px', }}>
      <center>
        <div><TextField label="Dog Name" name='dogName' id="standard-size-small" onChange = {props.handleDogChange} defaultValue="" size="small"/></div>
        <div><TextField label="Dog Last Name" name='lastName' id="standard-size-small" onChange = {props.handleDogChange} defaultValue="" size="small" /></div>
        <div><TextField label="Dog Breed" name='dogSize' id="standard-size-small" onChange = {props.handleDogChange} defaultValue="" size="small" /></div>
        <div><TextField label="Email" name='email' id="standard-size-small" onChange = {props.handleDogChange} defaultValue="" size="small" /></div>
        <div><TextField label="ZipCode" name='zipCode' id="standard-size-small" onChange = {props.handleDogChange} defaultValue="" size="small" /></div>
        </center>
     
      </div>
    </form>
  );
}








