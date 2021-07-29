import React from 'react';
import { useHistory } from "react-router";
import NavBar from './NavBar';


function LandingPage({ currentUser }){

    const history = useHistory()

    function redirectToSignin(){
        history.push('./login')
    }

    return (
        <div class='login-wrapper'>
            <div class="rules-box">
                <h1 class="logo"> Discourse </h1>
                <p align="center">Thanks for coming to Discourse!</p>
                <h1 align='center'>Here are our rules:</h1>
                <p class='rule' align='center'>1. Keep an open mind!</p>
                <p class='rule' align='center'>2. No hate speech.</p>
                <p class='rule' align='center'>3. See Rule #2.</p>
                {!currentUser ? <button class='chat' id='landing-submit' align="center" onClick={redirectToSignin}> sign in </button> : null}
            </div>
        </div>
    )
}

export default LandingPage;

