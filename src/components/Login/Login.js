import React from 'react';
import { initializeApp } from 'firebase/app';
import firebaseConfig from '../../firebaseConfig';
import firebase from 'firebase/app';
import 'firebase/auth';
import { useContext } from 'react';
import { userContext } from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)


    const googleLogIn = () => {
        if (firebase.apps.length === 0) {
            const app = initializeApp(firebaseConfig);
        }


        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;
                var token = credential.accessToken;
                var { displayName, email, photoURL } = result.user;
                const newUser = {
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    isLogged:true
                }
                setLoggedInUser(newUser)

                console.log(result.user);
            }).catch((error) => {

                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

            });
    }
    return (
        <div>
            <h1>This is Login</h1>
            <button onClick={googleLogIn}>LoG-In</button>
        </div>
    );
};

export default Login;