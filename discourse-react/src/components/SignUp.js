import React, {useState} from 'react'
import { Link, useHistory } from "react-router-dom";


function SignUp({currentUser, setCurrentUser}) {
    const [formData,setFormData] = useState({
        username: "" ,
        password: ""
    })
    const [errors, setErrors] = useState([]);
    const history = useHistory()

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
            setCurrentUser(data)
        console.log('Success:', data);
        history.push('/chat')
        })
    }

    function handleChange(e){
        setFormData({...formData,
            [e.target.name]: e.target.value,
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
    
            {errors.map((error) => {
            return <p key={error}>{error}</p>;
            })}
                <button type='submit'>
                    Sign Up
                </button>
                </form>

                <Link to = "/">
                    Login 
                </Link>
        
  
        </div>
    )
}

export default SignUp
