import React from 'react'; 
import { makeStyles} from '@material-ui/core/styles'; 
import Button from '@material-ui/core/Button'; 

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(1)
    }
    }) 
)

  

export default function LoginButton() {
    const classes = useStyles(); 
    return (
        
        <div
        style={{
            paddingBottom: '0px',
            paddingTop: '30px',
          }}>
              <center>
            <Button 
                className={classes.root} 
                variant = 'contained'
                color = 'primary'
                fullWidth
                type = 'submit'>
    
                Login
            </Button>
            </center>
        </div>

    ); 
}

