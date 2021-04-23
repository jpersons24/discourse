import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

const Profile = ({
  currentUser,
  matchedUser,
  setMatchedUser,
  setHasActiveChat,
  hasActiveChat,
  setCurrentUser,
  allUsers,
}) => {

  const history = useHistory();

  console.log("Current User", currentUser);

  if (currentUser.user.is_chatting && hasActiveChat === false) {
    setHasActiveChat(true);
  }

  function getNewMatch(){
    fetch(`http://localhost:3001/users/${currentUser.user.id}`)
      .then((resp) => resp.json())
      .then((match) => setMatchedUser(match.user));
  }

  useEffect(() => {
    getNewMatch()
  }, []);


  function setUserChatting(user1, user2) {
    let matches = [...user1.previous_matches, user2.username];

    fetch(`http://localhost:3001/users/${user1.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...user1,
        is_chatting: true,
        previous_matches: matches,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  function helpTest() {
    console.log(matchedUser);
    if (matchedUser) {
      setUserChatting(currentUser.user, matchedUser);
      setUserChatting(matchedUser, currentUser.user);
      setHasActiveChat(true);
    } else {
      return alert("Sorry no matches for you");
    }
  }

  const handleFindChat = () => {
    helpTest();
  };

  const handleEnterChat = () => {
    history.push("/chat");
  };

  console.log("Active Chat?", hasActiveChat);
  console.log("Matched User", matchedUser);

  return (
    <div>
      <h1 class="question" align="center">
        {currentUser.user.username}
      </h1>
      <h2>
        Your match has these differences {currentUser.user.differences}{" "}
        {currentUser.user.interests}
      </h2>
      {hasActiveChat ? (
        <button onClick={handleEnterChat}>Enter Chat</button>
      ) : (
        <button class="submit" align="center" onClick={handleFindChat}>
          Get Match
        </button>
      )}
    </div>
  );
};

export default Profile;
