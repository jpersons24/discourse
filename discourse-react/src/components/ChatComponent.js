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

import "stream-chat-react/dist/css/index.css";

function ChatComponent({ currentUser }) {
  console.log(currentUser);

  const chatClient = StreamChat.getInstance("9tbsyvz84awf");
  // const userToken =
  //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiY3VybHktYmxvY2stOCJ9.tN_s0rO5Lm765N_zuwXJRFzBmUMfksfbEk8LS3ueHkg";
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

  const channel = chatClient.channel("messaging", "curly-block-8", {
    // add as many custom fields as you'd like
    image: "https://www.drupal.org/files/project-images/react.png",
    name: "Talk about React",
    members: ["curly-block-8"],
  });

  return (
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
  );
}

export default ChatComponent;
