import React from 'react'
import { useHistory } from "react-router";


function LandingPage(){

    const history = useHistory()

    function redirectToSignin(){
        history.push('./login')
    }

    return (
        <div class="landing-wrapper">
            <h1>Here are our rules:</h1>
            <h2>1. yada </h2>
            <h2>2. yada </h2>
            <h2>3. yada </h2>
            <button onClick={redirectToSignin}> sign in  </button>
        </div>
    )
}

export default LandingPage;