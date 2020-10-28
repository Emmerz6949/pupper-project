import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles'; 
import TextField from '@material-ui/core/TextField'; 

const useStyles = makeStyles((theme) =>({
    root: { 
        flexGrow: 1, 
        '& .MuiTextField-root': { 
            width: '25ch',
        }
    }, 

    formSpacing: { 
        margin: theme.spacing(2),
    }
})); 

export default function LocationTextField(){ 
    const classes = useStyles();
    return( 
        <form className={classes.root} noValidate autoComplete='off'>
            <div className = {classes.formSpacing}>
                <p>Location</p>
            <TextField 
                    label='' 
                    id='outlined-basic'
                    variant = 'outlined' 
                    defaultValue='zipcode' 
                    size='small'/>
            </div>
        </form>
    )
}