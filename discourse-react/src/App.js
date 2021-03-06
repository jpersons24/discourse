import { useState, useEffect } from "react";
import './App.css';
import ChatComponent from "./components/ChatComponent.js";
import Login from "./components/Login.js";
import LandingPage from "./components/LandingPage.js";
import Profile from "./components/Profile.js";
import NavBar from "./components/NavBar";
import Form from "./components/signupform/Form";
import { Switch, Route } from "react-router-dom";
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [matchedUser, setMatchedUser] = useState(null);
  const [hasActiveChat, setHasActiveChat] = useState(false)
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch(`https://frozen-springs-53347.herokuapp.com/users`)
      .then((resp) => resp.json())
      .then((users) => {
        // const filteredUsers = users.filter((user) => {
        //   return user.is_chatting === false;
        // });
        setAllUsers(users);
      });
  }, []);

  return (
    <div class="app-wrapper">
      <Switch>
        <Route exact path="/">
          <LandingPage currentUser={currentUser} />
        </Route>
        <Route exact path="/chat">
          <ChatComponent
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            matchedUser={matchedUser}
            setMatchedUser={setMatchedUser}
            setHasActiveChat={setHasActiveChat}
          />
        </Route>
        <Route exact path="/login">
          <Login setHasActiveChat = {setHasActiveChat} currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/signup">
          <Form currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/profile">
          <Profile
            currentUser={currentUser}
            matchedUser={matchedUser}
            setMatchedUser={setMatchedUser}
            setHasActiveChat = {setHasActiveChat}
            hasActiveChat = {hasActiveChat}
            setCurrentUser={setCurrentUser}
            allUsers={allUsers}
          />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      {currentUser ? <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser}/> : null}
    </div>
  );
}

export default App;
