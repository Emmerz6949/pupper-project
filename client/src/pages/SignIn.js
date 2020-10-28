import React from 'react'; 
import Container from '@material-ui/core/Container'; 
import { makeStyles } from '@material-ui/core/styles'; 
import SignInBar from '../sign-in components/sign-in components/SignInBar'; 
import SignInButton from '../sign-in components/SignInButton'; 
import SignInPara from '../sign-in components/SignInPara'; 
import SignInFooter from '../sign-in components/SignInFooter'; 
import LoginTextFields from '../sign-in components/SignInTextFields';
import './App.css'; 

const useStyles = makeStyles((theme) => ({ 
    page:  { 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
    }
}))

function SignIn() { 
    const classes = useStyles(); 

    <Container maxWidth> 
        
        <div className = {classes.page}>
            <SignInBar />
            <SignInPara />
            <LoginTextFields />
            <SignInButton />

            <SignInFooter />
        </div> 
    </Container>
}

export default SignIn; 