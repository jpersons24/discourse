import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import Carousel from 'react-bootstrap/Carousel'

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
  console.log("Active Chat?", hasActiveChat);
  console.log("Matched User", matchedUser);

  if (currentUser.user.is_chatting && hasActiveChat === false) {
    setHasActiveChat(true);
  }

  function getNewMatch(){
    fetch(`https://frozen-springs-53347.herokuapp.com/users/${currentUser.user.id}`)
      .then(resp => resp.json())
      .then((match) => {
        if (match.status == true) {
          setMatchedUser(match.user)
        } else {
          console.log("Match", match)
        }
      })
  }

  useEffect(() => {
    getNewMatch()
  }, [setMatchedUser]);


  function setUserChatting(user1, user2) {
    let matches = [...user1.previous_matches, user2.username];

    fetch(`https://frozen-springs-53347.herokuapp.com/users/${user1.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...user1,
        is_chatting: true,
        previous_matches: matches,
        chatting_with: user2.username,
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


  return (
    <section class="profile-wrapper">
      <div class="profile-header">
        <h1 class="profile-name" align="center">
          {currentUser.user.username}
        </h1>
      </div>
      

      <div class="activity-wrapper">
        <div class="percentage-wrapper">
          <span class="percentage"> 89% </span>  
        </div>

        <div class="averages-wrapper">
          <div class="average">
            <h3>Successful Conversations</h3>
          </div>
        </div>  
      </div>

      <div class="stats-to-be-aware-of">
        <h3 align="center" class="stats-aware-of">Statistics to be aware of!!!</h3> 
        <div class="stat-card-container">
          <div class="stat-card card-1">
            <h3 align="center"> 65% </h3>
            <p align="center"> of all adults believe that political polarization will worsen over the next 30 years. </p>
          </div>
        

          <div class="stat-card card-2">
            <h3 align="center"> 64% </h3>
            <p align="center"> of adults believe that social media negatively affects society. </p>
          </div>
        </div>
        
        
      </div>
      

      
      {matchedUser && !hasActiveChat ?
      <div align="center">
        <p>Congrats you have a match!</p>
      </div>
      : null}
      
      <div>
        {hasActiveChat ? (
          <div align="center" class="enter-chat-box">
            <p>You have an active chat!</p>
            <button class='chat' align="center" onClick={handleEnterChat}>Enter Chat</button>
          </div>
        ) : (
          <button class="chat" align="center" onClick={handleFindChat}>
            Get Match
          </button>
        )}
      </div>
    </section>
  );
};

export default Profile;
