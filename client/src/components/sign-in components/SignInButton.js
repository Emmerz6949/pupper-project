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
       <center>
        <div style={{ paddingBottom: '0px', paddingTop: '30px', }}>
           
           <div >
            <Link to='/createwalker'>
            <Button 
                className={classes.root} 
                variant = 'contained'
                color = 'primary'
                
                type = 'submit'>
    
                Create Dog Walker Account
            </Button>
            </Link>
           </div>
         
            <div>
            <Link to='/createdog'>
            <Button 
                className={classes.root} 
                variant = 'contained'
                color = 'primary'
                
                type = 'submit'>
    
                Create Dog Owner Account
            </Button>
            </Link>
            </div>
        </div>
        </center>
        
       

    ); 
}

