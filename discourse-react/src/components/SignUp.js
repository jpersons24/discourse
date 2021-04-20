import React, {useState} from 'react'

function SignUp() {
    const [formData,setFormData] = useState({
        username: "" ,
        password: ""
    })
    const [errors, setErrors] = useState([]);

    function handleSubmit(e){
        e.preventDefault()
        return(hi)
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
          onChange={(e) => setFormData.username(e.target.value)}
        />
  
  
        <label>Password</label>
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          value={formData.password}
          onChange={(e) => setFormData.password(e.target.value)}
        />
  
        {errors.map((error) => {
          return <p key={error}>{error}</p>;
        })}
           <Button type='submit'>
      
             <Button.Content>Sign Up</Button.Content>
            </Button>
             </form>

             {/* <Link to="/login">
         <h5>Login?</h5>
         </Link> */}
           
       
    );
        </div>
    )
}

export default SignUp
