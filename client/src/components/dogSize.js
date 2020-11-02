import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
   
   paddingTop: 12,
   paddingBottom: 30,
   
   
    
  },
  margin: {
    height: theme.spacing (12),
  },
}));


const marks = [
  {
    value: 0,
    label: 'Small',
  },
  {
    value: 50,
    label: 'Medium',
  },
  {
    value: 100,
    label: 'Large',
  },
  
];

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
        <div className={classes.root} >
            <Typography id="discrete-slider-custom" gutterBottom>
               How big is your dog 
            </Typography>
            <Slider defaultValue={0} step={50} marks={marks}/>
        </div>
   
  );
}


