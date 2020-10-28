import React from 'react';
import Container from '@material-ui/core/Container'; 
import ScheduleBar from '../src/components/ScheduleBar';  
import { makeStyles } from '@material-ui/core/styles'; 
import LocationTextField from '../schedule components/LocationTextField';
import './App.css';
import ScheduleButton from '../schedule components/ScheduleButton';
import SchedulePicker from '../schedule components/DateTimePicker';
import SwitchLabels from '../schedule components/TimeOfDay';

const useStyles = makeStyles((theme) => ({
  page: { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center'
  }
}));

function Schedule() {
  const classes = useStyles(); 

  return (
   
    <Container maxWidth>
      
      <div className ={classes.page}>
  
        <ScheduleBar />
        <SchedulePicker />
        <LocationTextField />
        <SwitchLabels />
        <ScheduleButton />
        
      </div>
    
    </Container>
  );
}

export default Schedule;
