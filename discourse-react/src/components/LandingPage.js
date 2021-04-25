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
                <h1 align="center">What is Discourse</h1>
                <p align="center">Discourse - written or spoken communication or debate.</p>
                <p align="center">
                    Discourse is a place for people to be connected with others and engage in open conversation.
                    You will be matched with other users based on certain criteria. From that point, it's up to you to engage
                    with your match, talking about anything and everything. If your conversation needs a little push, we've got you
                    covered with conversation topics that appeal to both users using an algorithm based approach.
                    All we ask is you consider and abide by the 'Discourse Guidelines' we've set to ensure
                    everyone has a pleasant and meaningful experience.
                </p>
                <p align="center">Thanks for coming to Discourse!</p>
                <h1 align='center'>Here are our rules:</h1>
                <p class='rule' align='center'>1. Keep an open mind!</p>
                <p class='rule' align='center'>2. Whatever Cam says goes.</p>
                <p class='rule' align='center'>3. See Rule #2.</p>
                {!currentUser ? <button class='submit' id='landing-submit' onClick={redirectToSignin}> sign in  </button> : null}
            </div>
            {currentUser ? <NavBar /> : null}
        </div>
    )
}

export default LandingPage;