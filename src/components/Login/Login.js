import React, { useContext, useEffect, useState } from 'react';
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
    const [userInfo, setUserInfo] = useState({})
    const [isAdmin, setIsAdmin] = useState(false)
    const [admins, setAdmins] = useState([])
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleBlur = (e) => {
        const newUserInfo = { ...userInfo }
        newUserInfo[e.target.name] = e.target.value;
        setUserInfo(newUserInfo)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setLoggedInUser(userInfo)
        let admin = false;
        admins.forEach(element => {
            if (element.email === loggedInUser.email) {
                admin = true;
            }
        });
        history.replace(from)

        // if(isAdmin || admin) {
        //     history.replace(from)
        // }
    }
    useEffect(() => {
        fetch("https://fathomless-everglades-75760.herokuapp.com/getAdmin")
            .then(res => res.json())
            .then(data => setAdmins(data))
    }, [])
    useEffect(() => {
        fetch("https://fathomless-everglades-75760.herokuapp.com/isAdmin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])

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
            console.log(errorCode, errorMessage, email, credential)
            // ...
        });
    }
    return (
        <div className='text-center my-8 '>
            <div className='shadow-2xl border-2 border-indigo-600 w-96 py-6 px-8 mx-auto align-item-center'>
                <h2 className="text-xl font-normal">Login And Secure Browse</h2>
                {
                    loggedInUser.email ?
                        <button className='btn my-4' onClick={() => setLoggedInUser({})} >Sign-Out</button>
                        : <div>
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <div className="my-3">
                                        <label htmlFor="email">Email</label> <br />
                                        <input onBlur={handleBlur} type="email" name="email" id="email" required placeholder=' abc@gmail.com' />
                                    </div>
                                    <div className="my-3">
                                        <label htmlFor="email">Password</label> <br />
                                        <input onBlur={handleBlur} type="password" name="password" id="password" required placeholder=' password' />
                                    </div>
                                    <button type="submit" className='btn my-2'>Login</button>
                                </form>
                            </div>  
                            <div className='text-center mt-3'>Or <hr /></div>  
                            <button className='btn my-4' onClick={handleSignIn}>Google SignIn</button><br />
                            <button className='btn'><Link to='/'>Home</Link></button>
                        </div>
                }
            </div>
        </div>
    );
};

export default Login;