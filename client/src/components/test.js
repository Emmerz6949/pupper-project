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
      <Grid container alignItems="center">
      <div>
      <h1> Create Dog Profile</h1>
        <TextField label="Dog Name" name='dogName' id="standard-size-small" onChange = {props.handleDogChange} defaultValue="" size="small" />
        <TextField label="Dog Last Name" name='lastName' id="standard-size-small" onChange = {props.handleDogChange} defaultValue="" size="small" />
        <TextField label="Dog Breed" name='dogSize' id="standard-size-small" onChange = {props.handleDogChange} defaultValue="" size="small" />
        <TextField label="Email" name='email' id="standard-size-small" onChange = {props.handleDogChange} defaultValue="" size="small" />
        <TextField label="ZipCode" name='zipCode' id="standard-size-small" onChange = {props.handleDogChange} defaultValue="" size="small" />
      </div>
      </Grid>
    
    </form>
  );
}








