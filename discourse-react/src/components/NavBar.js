import { StreamChat } from "stream-chat";
import { useHistory } from 'react-router-dom';

function NavBar({ currentUser }) {

   const history = useHistory();
   const chatClient = StreamChat.getInstance("9tbsyvz84awf")
   
   function handleClick(e) {
      history.push("/login")
   }
   
   return(
      <div>
        {currentUser ?<button onClick={handleClick}>Logout</button> :<h1>Welcome</h1> } 
      </div>
   )
}

export default NavBar;