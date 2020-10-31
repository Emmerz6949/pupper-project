import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

export default function SwitchLabels() {
    const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    });

    const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div
        style={{
            paddingBottom: '40px',
            paddingTop: '10px',
            
          }}>
        
        
        
            <FormGroup row>

            <FormControlLabel
            control={
            <Switch
            checked={state.checkedMorning}
            onChange={handleChange}
            name="checkedMorning"
            color="primary"
            />
            }
            label="Morning"
            />

            <FormControlLabel
            control={
            <Switch
            checked={state.checkedAfternoon}
            onChange={handleChange}
            name="checkedAfternoon"
            color="primary"
            />
            }
            label="Afternoon"
            />

            <FormControlLabel
            control={
            <Switch
            checked={state.checkedEvening}
            onChange={handleChange}
            name="checkedEvening"
            color="primary"
            />
            }
            label="Evening"
            />
            </FormGroup>

        </div>
    ); 
}