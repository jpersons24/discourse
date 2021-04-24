import React from 'react'
import { useHistory } from "react-router";


function LandingPage(){

    const history = useHistory()

    function redirectToSignin(){
        history.push('./login')
    }

    return (
        <div class='login-wrapper'>
            <div class="question-box">
                <h1 class='question' align='center'>Here are our rules:</h1>
                <p class='question' align='center'>1. yada </p>
                <p class='question' align='center'>2. yada </p>
                <p class='question' align='center'>3. yada </p>
                <button class='submit' onClick={redirectToSignin}> sign in  </button>
            </div>
        </div>
    )
}

export default LandingPage;