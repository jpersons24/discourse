import { StreamChat } from "stream-chat";
import { useHistory, Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react'

function NavBar({ currentUser, setCurrentUser }) {

   const history = useHistory();
   const chatClient = StreamChat.getInstance("9tbsyvz84awf")

   function handleClick(e) {
      setCurrentUser(null)
      history.push("/login")
   }

   return (
      <div class="nav-wrapper" position="sticky">

         {currentUser ? <Link onClick={handleClick}><Icon name="hand peace icon"/></Link> : <Link> Discourse </Link>}


         <Link class="nav-option" to="/profile">
            <Icon name="address card icon" className="option"/>
            
         </Link>

         <Link class="nav-option" to="/">
            <Icon name="info circle" className="option"/>
            
         </Link>

         <Link class="nav-option" to="/chat">
            <Icon name="rocketchat icon" className="option"/>
         </Link>
      </div>
   )
}

export default NavBar;