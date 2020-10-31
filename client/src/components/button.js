import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function IconLabelButtons(props) {
  const classes = useStyles();

  return (
    <div>
      <Button 
        variant="contained"
        color="primary"
        className={classes.button}
        onChange = {props.handleDogChange}
        endIcon={<ArrowForwardIcon />}
      >
        Save profile
      </Button>
      
    </div>
  );
}