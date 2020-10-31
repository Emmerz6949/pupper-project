import React from 'react'; 
import { makeStyles } from '@material-ui/core/styles'; 
import EmailIcon from '@material-ui/icons/Email'; 
import LockIcon from '@material-ui/icons/Lock'; 
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

export default function LoginTextFields(props) { 
    const classes = useStyles(); 
    return ( 
        <form className={classes.root} noValidate autoComplete='off'>
            <div className = {classes.formSpacing}> 
                <EmailIcon 
                    color='primary'/>
                <TextField 
                    label='' 
                    name='email'
                    id='standard-size-small' 
                    defaultValue='johndoe@mail.com' 
                    onChange={props.handleLoginChange}
                    size='small'/>
            </div>

            <div className = {classes.formSpacing}>
                <LockIcon 
                    color='primary'/>
                <TextField 
                    label='' 
                    name='password'
                    id= 'standard-size-small' 
                    defaultValue='password' 
                    onChange={props.handleLoginChange}
                    size='small' />
            </div>
        </form>
    )
}