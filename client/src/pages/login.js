import React from 'react'; 
import Container from '@material-ui/core/Container'; 
import { makeStyles } from '@material-ui/core/styles'; 
import LoginBar from '../components/sign-in components/LoginBar'; 
import LoginButton from '../components/sign-in components/SignInButton'; 
import SignInPara from '../components/sign-in components/SignInPara'; 
import SignInFooter from '../components/sign-in components/SignInFooter'; 
import LoginTextFields from '../components/sign-in components/SignInTextFields';
import '../App.css'; 

const useStyles = makeStyles((theme) => ({ 
    page:  { 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
    }
}))

function SignIn() { 
    const classes = useStyles(); 

    return(
        <Container maxWidth> 
        
            <div className = {classes.page}>
                <LoginBar />
                <SignInPara />
                <LoginTextFields />
                <LoginButton />

                <SignInFooter />
            </div> 
        </Container>
    )
  
}

export default SignIn; 