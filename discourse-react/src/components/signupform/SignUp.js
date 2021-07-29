import React, {useState} from 'react'
import { Link, useHistory } from "react-router-dom";


function SignUp({currentUser, setCurrentUser, formData, handleChange, currentStep, setCurrentStep}) {
    
    const [errors, setErrors] = useState([]);
    const history = useHistory()

    console.log(formData)

    function handleSubmit(e){
        e.preventDefault()

        const newUser = {
            username: formData.username,
            password: formData.password
        }

        fetch('https://frozen-springs-53347.herokuapp.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === false) {
                setErrors(data.message)
            }
            setCurrentUser(data)
            console.log('Success:', data);
            // after signup, push user to 1st questionaire
            setCurrentStep(1)
        })
    }

    

    return (
        <div class="login-wrapper">
            <div class="login-box">
                <form class="sign-in-form" onSubmit={handleSubmit} autoComplete="off">
                <p class="sign" align="center">Sign up</p>

                <input
                    class="un"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                />

                <input
                    class="pass"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                />
                    <button class="chat" type='submit'>
                        Sign Up
                    </button>
                    </form>

                { errors ? <div> {errors} </div> : null }

                <p align="center"> <Link to = "/login"> Already have an account? </Link> </p>
            </div>
        </div>
    )
}

export default SignUp
