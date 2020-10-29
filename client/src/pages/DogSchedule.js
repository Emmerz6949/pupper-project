import React from 'react';
import Container from '@material-ui/core/Container'; 
import ScheduleBar from '../components/schedule components/ScheduleBar'; 
//import SchedulePicker from '../src/components/DateTimePicker'; 
import { makeStyles } from '@material-ui/core/styles'; 
import LocationTextField from '../components/schedule components/LocationTextField';
import '../App.css';
import WalkButton from '../components/schedule components/WalkButton';
import SchedulePicker from '../components/schedule components/DateTimePicker';
import SwitchLabels from '../components/schedule components/TimeOfDay';

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
   
    <Container>
      
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
