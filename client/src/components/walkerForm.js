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

export default function TextFieldSizesWalker() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div style={{ paddingBottom: '0px', paddingTop: '60px',}}>
      
        <div><TextField label="First Name" id="standard-size-small" defaultValue="" size="small" /></div>
        <div><TextField label="Last Name" id="standard-size-small" defaultValue="" size="small" /></div>
        <div><TextField label="Email" id="standard-size-small" defaultValue="" size="small" /></div>
        <div><TextField label="ZipCode" id="standard-size-small" defaultValue="" size="small" /></div>
      </div>
      
    
    </form>
  );
}