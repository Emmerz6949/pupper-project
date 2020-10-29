import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({ 
    formSpacing: { 
        margin: theme.spacing(2)
    }
})); 

export default function SchedulePicker() {
    const [selectedDate, handleDateChange] = useState(new Date());
    const classes = useStyles(); 

    return (
        
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        
        <div className = {classes.formSpacing}>
        <p>Date</p>
            <KeyboardDatePicker
            autoOk
            variant="inline"
            inputVariant="outlined"
            label=""
            format="MM/dd/yyyy"
            value={selectedDate}
            InputAdornmentProps={{ position: "start" }}
            onChange={date => handleDateChange(date)}
            />
        </div>
    </MuiPickersUtilsProvider>
    );
}