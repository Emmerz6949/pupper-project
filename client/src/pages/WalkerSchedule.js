import React from 'react';
import { useState } from 'react'; 
import Container from '@material-ui/core/Container'; 
import ScheduleBar from '../components/schedule components/ScheduleBar';  
import { makeStyles } from '@material-ui/core/styles'; 
import LocationTextField from '../components/schedule components/LocationTextField';
import '../App.css';
import ScheduleButton from '../components/schedule components/ScheduleButton';
import SchedulePicker from '../components/schedule components/DateTimePicker';
import SwitchLabels from '../components/schedule components/TimeOfDay';
import API from '../utils/API'; 

const useStyles = makeStyles((theme) => ({
  page: { 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'center'
  }
}));

function CreateWalkerSchedule() { 

  const [scheduleObj, setScheduleObj] = useState({ date: '', time: '' }); 

  const handleScheduleChange = event => { 
    const { date, time } = event.target; 
    setScheduleObj({ ...scheduleObj, [date]: time })
  }

  const handleScheduleSubmit = event => {
    API.walker_schedule({
        date: scheduleObj.date, 
        time: scheduleObj.time
    })
      .then(res => console.log(res))
      .catch(err => console.log(err)); 
  }
}


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
