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

function ChatComponent({ currentUser, setCurrentUser, matchedUser, setMatchedUser, setHasActiveChat}) {
  console.log('Current user', currentUser);
  console.log('Matched user', matchedUser);
  const [showInterest, setShowInterest] = useState(false);
  const [interest, setInterest] = useState("")
  const chatClient = StreamChat.getInstance("9tbsyvz84awf");
  const [question, setQuestion] = useState(false)
  const [showDifferences, setShowDifferences] = useState(false)
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
    
    fetch(`http://localhost:3001/end_chat/${currentUser.user.id}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log('curiosity', data)
        setCurrentUser(data)
      });


    fetch(`http://localhost:3001/users/${currentUser.user.id}`)
      .then((resp) => resp.json())
      .then((match) => setMatchedUser(match.user));
      setHasActiveChat(false)
    history.push('/profile')
  }

  const differences = matchedUser.differences.map((diff) => {
    return (<div>
      
      <p>{diff}
    </p>
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
        <button class="submit" onClick={handleClick} style={{marginLeft: "25px"}}>Get a similarity</button>
        <button class="submit" onClick={handleModal} style={{marginLeft: "25px"}}>End chat</button>
      </div>
      {question ? 
      <>
<div class="modal">
        <div class="modal-content">
            <div>Did you enjoy your conversation?</div>

            <button onClick={()=> setShowDifferences(true)}>Yes</button>
            <button onClick={handleEndChat}>No</button>
        </div>
    </div>
  
    </>
    :
    null
  }
    {showDifferences ? <div>
      <h3>Glad you enjoyed your conversation, here are some areas where you differentiated</h3>
      {differences}
      <button onClick={handleEndChat}>Menu</button>
      </div>
      : 
      null
      }


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
  );
}

export default ChatComponent;
