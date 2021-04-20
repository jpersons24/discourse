import ChatComponent from './components/ChatComponent.js';
import Login from "./components/Login.js";
import SignUp from "./components/SignUp.js";
import {Switch,Route} from 'react-router-dom'
function App(){

  return (
    <div>
      <Switch>
        <Route exact path = "/chat">
          <ChatComponent/>
        </Route>
        <Route exact path = "/">
          <Login/>
        </Route>
        <Route exact path = "/signup">
          <SignUp/>
        </Route>
      </Switch>
    </div>
  )
}; 

export default App;
