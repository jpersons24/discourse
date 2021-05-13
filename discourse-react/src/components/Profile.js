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

    fetch(`http://localhost:3001/users/${user1.id}`, {
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

  console.log("Active Chat?", hasActiveChat);
  console.log("Matched User", matchedUser);

  return (
    <div style={{justifyContent: "center"}} class="profile-wrapper">
      <div class="profile-header">
        <h1 class="question" align="center">
          {currentUser.user.username}
        </h1>
      </div>
      

      <div class="activity-wrapper">
        <div class="percentage-wrapper">
          {/* NEW CHART STUFF */}
          {/* <figure class="chart-three animate">
          <svg role="img" xmlns="http://www.w3.org/2000/svg%22%3E">
            <title>[title here]</title>
            <desc>[long description here]</desc>
            <circle class="circle-background"/>
            <circle class="circle-foreground"/>
          </svg>
          <figcaption>75% of all males like donuts.</figcaption>
          </figure> */}

          <div class="percent">
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div class="number">
              <h2 class="good">89<span>%</span></h2>
            </div>
          </div>  
        </div>

        <div class="averages-wrapper">
          <div class="average">
            <h3>Successful Conversations</h3>
          </div>
        </div>  
      </div>

      <div style={{padding: "5px", textAlign: "center"}}>
        <h3>Statistics to be aware of!!!</h3>
        <p><strong>65%</strong> of all adults beleive that political polarization will worsen over the next 30 years.</p>
        <p><strong>64%</strong> of adults believe that social media negatively affects society.</p>
      </div>
      
      {matchedUser && !hasActiveChat ?
      <div align="center">
        <p>Congrats you have a match!</p>
      </div>
      : null}
      
      <div style={{ padding: "2rem" }}>
        {hasActiveChat ? (
          <div align="center">
            <p>You have an active chat!</p>
            <button class='chat' align="center" onClick={handleEnterChat}>Enter Chat</button>
          </div>
        ) : (
          <button class="chat" align="center" onClick={handleFindChat}>
            Get Match
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
