import React from "react";
import { useHistory } from "react-router";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import { useState } from 'react';
import "stream-chat-react/dist/css/index.css";
import {Modal} from 'semantic-ui-react';

function ChatComponent({ currentUser, setCurrentUser, matchedUser, setMatchedUser, setHasActiveChat}) {
  console.log('Current user', currentUser);
  console.log('Matched user', matchedUser);
  const [showInterest, setShowInterest] = useState(false);
  const [interest, setInterest] = useState("")
  const chatClient = StreamChat.getInstance("9tbsyvz84awf");
  const [question, setQuestion] = useState(false)
  const [showDifferences, setShowDifferences] = useState(false)
  const [open, setOpen] = useState(false)
  // const userToken =
  // "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiY3VybHktYmxvY2stOCJ9.tN_s0rO5Lm765N_zuwXJRFzBmUMfksfbEk8LS3ueHkg";
  const userToken = currentUser.token;

  const history = useHistory()

  chatClient.connectUser(
    {
      id: currentUser.user.username,
      name: currentUser.user.username,
      image:
        "https://getstream.io/random_png/?id=curly-block-8&name=curly-block-8",
    },
    userToken
  );

 
  const channel = chatClient.channel(
    "messaging",
    { members: [currentUser.user.username, matchedUser.username] },
    {
      // add as many custom fields as you'd like
      image: "https://www.drupal.org/files/project-images/react.png",
      name: "Talk about React",
      members: ["curly-block-8"],
    }
  );


  function handleClick(e) {
    const randomInterest = matchedUser.interests[Math.floor(Math.random() * matchedUser.interests.length)]
    setInterest(randomInterest)
    setShowInterest(true)
  }


  function handleModal(){
    setQuestion(true)
    // handleEndChat()
  }

  function handleEndChat(){
    console.log("hit")
    // render different button/not enter chat 
    // patch backend 
    channel.delete()
    setQuestion(true)
    
    fetch(`https://frozen-springs-53347.herokuapp.com/end_chat/${currentUser.user.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log('curiosity', data)
        setCurrentUser(data)
      });


    // fetch(`https://frozen-springs-53347.herokuapp.com/users/${currentUser.user.id}`)
    //   .then((resp) => resp.json())
    //   .then((match) => setMatchedUser(match.user));
      setMatchedUser(null)
      setHasActiveChat(false)
      console.log(currentUser)
      history.push('/profile')
  }

  const differences = matchedUser.differences.map((diff) => {
    return (
      <div>
        <p align="center">{diff}</p>
      </div>
    )
  })
  
  
  return (
    <div>
      <div align="center">
        {showInterest ? 
        <p align="center" class="un">Talk about this: {interest}</p> 
        : 
        <p align="center" class="un">Need a topic to discuss?</p>
        }
        <button class="chat" align="center" onClick={handleClick} style={{marginLeft: "25px"}}>Get a similarity</button>
        {/* <button id='modal-trigger' class="submit" onClick={handleModal} style={{marginLeft: "25px"}}>End chat</button> */}
        <Modal basic
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          size='small'
          trigger={<button id='modal-trigger' class="chat" align="center" style={{marginLeft: "25px"}}>End chat</button>}
          >
          <div class="login-wrapper">
            <div class="modal-box">
                <p class='question' align='center'>Did you enjoy your conversation?</p>

                <button class='chat' align="center" style={{width: "150px"}} onClick={()=> setShowDifferences(true)}>Yes</button>
                <br></br>
                <br></br>
                <button class='chat' align="center" style={{width: "150px"}} onClick={handleEndChat}>No</button>
            </div>
            {showDifferences ? 
              <div >
                <h3 align="center">Glad you enjoyed your conversation!</h3>
                <h5 align="center">You have different views on the following topics:</h5>
                {differences}
                <br></br>
                <br></br>
                <button class="chat" align="center" style={{width: "150px"}} onClick={handleEndChat}>Menu</button>
              </div>
              : null}
          </div>
        </Modal>
      </div>
     
      
    
      <div
        style={{
          margin: "auto",
          width: "100%",
          height: "20%"
        }}
      >
        <Chat client={chatClient} theme="messaging light">
          <Channel channel={channel}>
            <Window>
              <ChannelHeader />
              <MessageList />
              <MessageInput />
            </Window>
            <Thread />
          </Channel>
        </Chat>
      </div>            
    </div>
  );
}

export default ChatComponent;
