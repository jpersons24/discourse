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
      <nav class="nav-wrapper">
         <div class="option-box">
            {currentUser ? <Link onClick={handleClick}><Icon name="hand peace icon" className="option" size="large"/></Link> : <Link> Discourse </Link>}

            <Link class="nav-option" to="/profile">
               <Icon name="address card icon" className="option" size="large" />
               
            </Link>

            <Link class="nav-option" to="/about">
               <Icon name="info circle" className="option" size="large"/>
               
            </Link>

            <Link class="nav-option" to="/chat">
               <Icon name="rocketchat icon" className="option" size="large"/>
            </Link>
         </div>
         
      </nav>
   )
}

export default NavBar;