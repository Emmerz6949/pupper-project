import React from 'react';
import Container from '@material-ui/core/Container'; 
import ScheduleBar from '../src/components/ScheduleBar'; 
//import SchedulePicker from '../src/components/DateTimePicker'; 
import { makeStyles } from '@material-ui/core/styles'; 
import LocationTextField from './components/LocationTextField';
import './App.css';
import WalkButton from './components/WalkButton';
import SchedulePicker from './components/DateTimePicker';
import SwitchLabels from './components/TimeOfDay';

const useStyles = makeStyles((theme) => ({
  page: { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center'
  }
})
)

function Schedule() {
  const classes = useStyles(); 

  return (
   
    <Container maxWidth>
      
      <div className ={classes.page}>
  
        <ScheduleBar />
        <SchedulePicker />
        <LocationTextField />
        <SwitchLabels />
        <WalkButton />
        
      </div>
    
    </Container>
  );
}

export default Schedule;
