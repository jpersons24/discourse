import { StreamChat } from "stream-chat";
import { useHistory } from 'react-router-dom';

function NavBar({ currentUser }) {

   console.log(currentUser)

   const history = useHistory();
   const chatClient = StreamChat.getInstance("9tbsyvz84awf")
   
   function handleClick(e) {
      history.push("/login")
   }
   
   return(
      <div>
         <button onClick={handleClick}>Logout</button>
      </div>
   )
}

export default NavBar;