import { StreamChat } from "stream-chat";
import { useHistory } from 'react-router-dom';

function NavBar({ currentUser }) {

   const history = useHistory();
   const chatClient = StreamChat.getInstance("9tbsyvz84awf")
   
   function handleClick(e) {
      history.push("/login")
   }
   
   return(
      <div class="nav-wrapper">
         
            {currentUser ?<button onClick={handleClick}>Logout</button> : <div> Discourse </div>}
         

         <div>
            Dashboard 
         </div>

         <div>
            About
         </div>

         <div>
            Chat
         </div>
      </div>
   )
}

export default NavBar;