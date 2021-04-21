import {useState} from 'react'
import ChatComponent from './components/ChatComponent.js';
import Login from "./components/Login.js";
import LandingPage from './components/LandingPage.js'
import SignUp from "./components/signupform/SignUp.js";
import NavBar from './components/NavBar';
import Form from './components/signupform/Form';
import {Switch,Route} from 'react-router-dom';
function App(){
  const [currentUser, setCurrentUser] = useState(null)

  return (
    <div>
      <NavBar currentUser={currentUser}/>
      <Switch>
        <Route exact path = "/">
          <LandingPage />
        </Route>
        <Route exact path = "/chat">
          <ChatComponent currentUser={currentUser}/>
        </Route>
        <Route exact path = "/login">
          <Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>
        <Route exact path="/signup">
          <Form currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>
      </Switch>
    </div>
  )
}; 

export default App;
