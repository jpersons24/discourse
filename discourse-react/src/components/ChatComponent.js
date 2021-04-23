import React from "react";
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

function ChatComponent({ currentUser, matchedUser }) {
  console.log(currentUser);
  console.log(matchedUser);
  const [showInterest, setShowInterest] = useState(false);
  const [interest, setInterest] = useState("")
  const chatClient = StreamChat.getInstance("9tbsyvz84awf");
  // const userToken =
  // "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiY3VybHktYmxvY2stOCJ9.tN_s0rO5Lm765N_zuwXJRFzBmUMfksfbEk8LS3ueHkg";
  const userToken = currentUser.token;

  chatClient.connectUser(
    {
      id: currentUser.user.username,
      name: currentUser.user.username,
      image:
        "https://getstream.io/random_png/?id=curly-block-8&name=curly-block-8",
    },
    userToken
  );

  // debugger;
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

  return (
    <div>
      <div align="center">
        {showInterest ? 
        <p align="center" class="un">Talk about this: {interest}</p> 
        : 
        <p align="center" class="un">Need a topic to discuss?</p>
        }
        <button class="submit" onClick={handleClick} style={{marginLeft: "25px"}}>Get a similarity</button>
      </div>
      
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
