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
    <main class="profile-wrapper">
      <section class="profile-container">
        <div class="profile-header">
          <h1 class="profile-name" align="center">
            {currentUser.user.username}
          </h1>
        </div>
        

        <div class="activity-wrapper">

          <div class="activity-card-list">
            <div class="activity-card activity-1">
              <div class="percentage-wrapper">
                <span class="percentage"> 89% </span>  
              </div>

              <div class="averages-wrapper">
                <div class="average">
                  <h3>Success!</h3>
                </div>
              </div>
            </div>  

            <div class="activity-card activity-2">
              <div class="median-year-wrapper">
                <h3 class="activity-value average-age"> 27 </h3>  
              </div>

              <div class="averages-wrapper">
                <div class="average">
                  <h3>Median age</h3>
                </div>
              </div>
            </div> 

            <div class="activity-card">
              <div class="activity-value average-time">
                <h3 class="activity-value"> 6d </h3>  
              </div>

              <div class="averages-wrapper">
                <div class="average">
                  <h3>Avg time </h3>
                </div>
              </div>
            </div>
          </div>

           

          <div class="activity-breakdown">
            <h2> Activity Breakdown </h2>
            <p class="breakdown-point"> - Nice! 89% of your conversations lead to meaningful discourse.</p>
            <p class="breakdown-point"> - The average age of the people you have conversed with is 27 years old.</p>
            <p class="breakdown-point"> - The average time per discussion is 6 days.</p>
          </div>
        </div>

        <div class="stats-to-be-aware-of">
          <h3 align="center" class="stats-header">Statistics to be aware of!!!</h3> 
          <div class="stat-card-container">
            <div class="stat-card card-1">
              <h3 align="center"> 65% </h3>
              <p align="center"> of all adults believe that political polarization will worsen over the next 30 years. </p>
            </div>
          

            <div class="stat-card card-2">
              <h3 align="center"> 64% </h3>
              <p align="center"> of adults believe that social media negatively affects society. </p>
            </div>

            <div class="stat-card card-3">
              <h3 align="center"> 26% </h3>
              <p align="center"> of adults say they SOMETIMES get their news from social media. </p>
            </div>

            <div class="stat-card card-4">
              <h3 align="center"> 28% </h3>
              <p align="center"> of adults say they OFTEN get their news from social media. </p>
            </div>
          </div>
        </div>
      
        
        <div class="have-a-match">
          {matchedUser && !hasActiveChat ?
          <div align="center">
            <p>Congrats you have a match!</p>
          </div>
          : null}

          {hasActiveChat ? (
            <div align="center" class="enter-chat-box">
              <p class="enter-chat-message">You have an active chat!</p>
              <button class='enter-chat' align="center" onClick={handleEnterChat}>Enter Chat</button>
            </div>
          ) : (
            <button class="chat" align="center" onClick={handleFindChat}>
              Get Match
            </button>
          )}
        </div>
      </section>
    </main>
  );
};

export default Profile;
