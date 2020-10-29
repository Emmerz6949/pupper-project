import React from 'react';
import { makeStyles } from '@material-ui/core/styles'; 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({
  root: { 
    padding: '15px'
  }
}));

export default function ScheduleBar() { 
    const classes = useStyles(); 

    return (
        <AppBar position="static" className={classes.root}>
        <Toolbar>
        <img src= '' alt=""/>

          
          <Typography variant="h6" >
            Go For A Walk 
          </Typography>

    
        </Toolbar>
      </AppBar>
    )
}