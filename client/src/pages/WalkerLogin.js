import React, { useState } from 'react'; 
import Container from '@material-ui/core/Container'; 
import { makeStyles } from '@material-ui/core/styles'; 
import LoginBar from '../components/sign-in components/LoginBar'; 
import LoginButton from '../components/sign-in components/LoginButton'; 
import SignInPara from '../components/sign-in components/SignInPara'; 
import SignInFooter from '../components/sign-in components/SignInFooter'; 
import LoginTextFields from '../components/sign-in components/SignInTextFields';
import '../App.css'; 
import { Link } from 'react-router-dom'; 
import API from '../utils/API';

const useStyles = makeStyles((theme) => ({ 
    page:  { 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
    }
})); 



function WalkerLogin() { 
    const classes = useStyles(); 

    //set component initial state
    const [loginObject, setLoginObject] = useState({email: '', password: ''}); 

    //handles updating component state when the user types into the input field
    const handleLoginChange = (event) => { 
        const { email, password } = event.target; 
        setLoginObject({ ...loginObject, [email]: password })
    }; 

    //use the loginwalker to login user 
    const handleLoginSubmit = (event) => { 
        event.preventDefault();  

        if (loginObject.email && loginObject.password) { 
            API.loginWalker({
                email: loginObject.email, 
                password: loginObject.password
            })
            .then(res => console.log(res))
            .catch(err => console.log(err)); 
        }
    }

    return(
        <Container maxWidth> 
        
            <div className = {classes.page}>
                <LoginBar />
                <SignInPara />
                <LoginTextFields handleLoginChange = {handleLoginChange} />

                <Link to='/walkerprofile'>
                <LoginButton handleLoginSubmit = {handleLoginSubmit}/>
                </Link>
                
                <Link to='/signup'>
                <SignInFooter />
                </Link>
                
            </div> 
        </Container>
    )
  
}

export default WalkerLogin; 