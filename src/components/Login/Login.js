import React, { useContext } from 'react';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './Firebase.config';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
   
    const handleSignIn = () => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            var newUser = { name: user.displayName, email: user.email }
            setLoggedInUser(newUser);
            history.replace(from)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }
    return (
        <div className='text-center my-8 '>
            <h2>Login And Secure Browse</h2>
            {
                loggedInUser.email ? 
                    <button className='btn my-4' onClick={() => setLoggedInUser({})} >Sign-Out</button>
                : <div>
                    <button className='btn my-4' onClick={handleSignIn}>Google SignIn</button><br />
                    <button className='btn'><Link to='/'>Home</Link></button>
                </div>
            }
            
        </div>
    );
};

export default Login;