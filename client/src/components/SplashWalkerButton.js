import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function SplashWalkerButton() {
  const classes = useStyles();

  return (
    <div
    
    style={{
        paddingBottom: '25px',
        paddingTop: '0px',
       
      }}
      >
    
   
      <Button 
        variant="contained"
        color="primary"
        className={classes.button}
        
      >
        Sign in as dog walker
      </Button>
      
    </div>
  );
}