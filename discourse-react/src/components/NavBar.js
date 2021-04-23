import { StreamChat } from "stream-chat";
import { useHistory, Link } from 'react-router-dom';

function NavBar({ currentUser, setCurrentUser }) {

   const history = useHistory();
   const chatClient = StreamChat.getInstance("9tbsyvz84awf")

   function handleClick(e) {
      setCurrentUser(null)
      history.push("/login")
   }

   return (
      <div class="nav-wrapper">

         {currentUser ? <Link onClick={handleClick}>Logout</Link> : <Link> Discourse </Link>}


         <Link class="nav-option" to="/profile">
            Dashboard
         </Link>

         <Link class="nav-option" to="/about">
            About
         </Link>

         <Link class="nav-option" to="/chat">
            Chat
         </Link>
      </div>
   )
}

export default NavBar;