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

        fetch('http://localhost:3001/users', {
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
        <div>
            <form onSubmit={handleSubmit} autoComplete="off">
            <h1>Signup</h1>
  
            <label>Username</label>
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
    
    
            <label>Password</label>
            <input
                type="password"
                name="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
            />
                <button type='submit'>
                    Sign Up
                </button>
                </form>

            { errors ? <div> {errors} </div> : null }

                <Link to = "/">
                    Login 
                </Link>

            
  
        </div>
    )
}

export default SignUp
