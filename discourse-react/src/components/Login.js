import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";




function Login({ currentUser,setCurrentUser }){
  const history = useHistory();
  const [formData,setFormData] = useState({
    username: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(false)
  // const [user, setUser] = useState([])

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(e.target.value)
  }
 
  function handleSubmit(e){
    e.preventDefault()
    

    const user = {
      username: formData.username,
      password: formData.password,
    }
  
    fetch('http://localhost:3001/login', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(user => {
      setCurrentUser(user)
      history.push("/chat")
    })
  }


    

    return (
      <div className="login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <input 
              type="input"
              value={formData.username}
              name="username"
              placeholder="Username"
              onChange={handleChange}
            />
            <input
              type="password"
              value={formData.password}
              name="password"
              placeholder="Password" 
              onChange={handleChange} 
            />
            <button type='submit'>
                 Login            
            </button>
          <Link to="/signup">
            Sign Up?
          </Link>
        
        </form>
    </div>
    ) 
}

  
  export default Login;
