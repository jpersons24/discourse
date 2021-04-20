import {useState} from 'react'
import ChatComponent from './components/ChatComponent.js';
import Login from "./components/Login.js";
import LandingPage from './components/LandingPage.js'
import SignUp from "./components/SignUp.js";
import {Switch,Route} from 'react-router-dom'
function App(){
  const [currentUser, setCurrentUser] = useState(null)


  return (
    <div>
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
        <Route exact path = "/signup">
          <SignUp currentUser={currentUser} setCurrentUser={setCurrentUser}/>
        </Route>
      </Switch>
    </div>
  )
}; 

export default App;
