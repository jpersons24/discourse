import { useState, useEffect } from "react";
import ChatComponent from "./components/ChatComponent.js";
import Login from "./components/Login.js";
import LandingPage from "./components/LandingPage.js";
import Profile from "./components/Profile.js";
import NavBar from "./components/NavBar";
import Form from "./components/signupform/Form";
import { Switch, Route } from "react-router-dom";
function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [matchedUser, setMatchedUser] = useState(null);

  // useEffect(() => {
  //   fetch(`http://localhost:3001/users`)
  //     .then((resp) => resp.json())
  //     .then((users) => {
  //       const filteredUsers = users.filter((user) => {
  //         return user.is_chatting === false;
  //       });
  //       console.log(filteredUsers);
  //       setAllUsers(filteredUsers);
  //     });
  // }, []);

  return (
    <div>
      <NavBar currentUser={currentUser} />
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/chat">
          <ChatComponent
            currentUser={currentUser}
            matchedUser={matchedUser}
            setMatchedUser={setMatchedUser}
          />
        </Route>
        <Route exact path="/login">
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/signup">
          <Form currentUser={currentUser} setCurrentUser={setCurrentUser} />
        </Route>
        <Route exact path="/profile">
          <Profile
            currentUser={currentUser}
            matchedUser={matchedUser}
            setMatchedUser={setMatchedUser}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
