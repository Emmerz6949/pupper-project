import React from 'react'; 
import { makeStyles} from '@material-ui/core/styles'; 
import Button from '@material-ui/core/Button'; 
import { Link } from 'react-router-dom'; 

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1)
    }
    }) 
)

  

export default function SignInButton() {
    const classes = useStyles(); 
    return (
        <div>
            <Link to='/createwalker'>
            <Button 
                className={classes.root} 
                variant = 'contained'
                color = 'primary'
                fullWidth
                type = 'submit'>
    
                Create Dog Walker Account
            </Button>
            </Link>
         
            <Link to='/createdog'>
            <Button 
                className={classes.root} 
                variant = 'contained'
                color = 'primary'
                fullWidth
                type = 'submit'>
    
                Create Dog Owner Account
            </Button>
            </Link>
        </div>

    ); 
}

