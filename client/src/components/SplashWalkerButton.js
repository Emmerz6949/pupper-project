import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

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
        paddingBottom: '40px',
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