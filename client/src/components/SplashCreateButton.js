import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function SplashCreateButton() {
  const classes = useStyles();

  return (
    <div className={classes.root}
    
    
  
    
    style={{
        paddingBottom: '10px',
        paddingTop: '1px',
       
      }}
      >
    
    
    
      
      <Button color="primary">Create Account</Button>
      
      
    </div>
  );
}