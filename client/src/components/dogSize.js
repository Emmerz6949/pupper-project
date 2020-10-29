import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
   paddingLeft: 0,
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

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
        <div className={classes.root} >
            <Typography id="discrete-slider-custom" gutterBottom>
               <p>How big is your dog </p> 
            </Typography>
            <Slider defaultValue={0} step={50} marks={marks}/>
        </div>
    </Grid>
  );
}


