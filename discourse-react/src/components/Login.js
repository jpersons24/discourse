import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function Login({ currentUser, setCurrentUser, setHasActiveChat }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);
  // const [user, setUser] = useState([])

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const user = {
      username: formData.username,
      password: formData.password,
    };

    fetch("https://frozen-springs-53347.herokuapp.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((user) => {
        setCurrentUser(user);
        setHasActiveChat(user.user.is_chatting)
        history.push("/profile");
      });
  }

  return (
    <div className="login-wrapper">
      <div class="login-box">
        <h3 class="sign" align="center"> Sign in </h3>
        <form class="sign-in-form" onSubmit={handleSubmit}>
          <input
            class="un"
            type="input"
            value={formData.username}
            name="username"
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            class="pass"
            type="password"
            value={formData.password}
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button class="chat" type="submit" align="center">Login</button>
          <br></br>
          <br></br>
          <p align="center"><Link className="sign-up-link" to="/signup"> Sign up </Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
