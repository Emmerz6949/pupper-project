import React from 'react'; 

import Grid from '@material-ui/core/Grid'; 
import Link from '@material-ui/core/Link'; 
import { makeStyles } from '@material-ui/styles'; 

const useStyles = makeStyles((theme) => ({ 
    page: { 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center'
    }
})
)

export default function SignUpFooter() { 
    const classes = useStyles(); 

    return ( 
        <Grid container className = {classes.page}> 
            <Grid item> 
                <Link href='#' variant = 'body2'> 
                    {"Don't have an account? Sign Up!"}
                </Link>
            </Grid>
        </Grid>
    )
}