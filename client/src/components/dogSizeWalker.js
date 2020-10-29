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
    value: 33,
    label: 'Medium',
  },
  {
    value: 66,
    label: 'Large',
  },
  {
    value: 99,
    label: 'Any Size',
  },
  
];

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSliderWalker() {
  const classes = useStyles();

  return (
    <Grid container direction="row" justify="center" alignItems="center">
        <div className={classes.root} >
            <Typography id="discrete-slider-custom" gutterBottom>
               <p>What size dog can you walk? </p> 
            </Typography>
            <Slider defaultValue={0} step={33.33} marks={marks}/>
        </div>
    </Grid>
  );
}


