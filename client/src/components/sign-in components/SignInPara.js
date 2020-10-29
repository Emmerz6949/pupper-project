import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles'; 
import Typography from '@material-ui/core/Typography'; 

const useStyles = makeStyles({
    root: { 
        width: '100%', 
        maxWidth: 350,
        color: 'rgba(34, 167, 240, 1)'
    }
}); 

export default function Para(){ 
    const classes = useStyles(); 

    return ( 
        <div className={classes.root}>
            <Typography variant = 'body1' gutterBottom> 
            Welcome to Pupper, an app designed for matching good doggies with dog walkers
            in the area when you don't have the time. Create an account and get started with 
            Pupper.
            </Typography>
        </div>
      
    )
}