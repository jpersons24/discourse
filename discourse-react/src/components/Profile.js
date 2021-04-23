import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

const Profile = ({ currentUser, matchedUser, setMatchedUser }) => {
  const [matchArray, setMatchArray] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const history = useHistory();
  console.log(currentUser)

  useEffect(() => {
    fetch(`http://localhost:3001/users`)
      .then((resp) => resp.json())
      .then((users) => {
        // console.log(users)
        const filteredUsers = users.filter((user) => {
          return user.is_chatting === false;
        });
        // console.log(filteredUsers);
        setAllUsers(filteredUsers);
      });
  }, []);

  // console.log(allUsers)
  // debugger;

  const newConnections = allUsers.filter(
    (user) => !currentUser.user.previous_matches.includes(user.username)
  );

  console.log("new connections", newConnections);

  // debugger

  const matchMaker = () => {
    let collectedArray = [];
    for (let i = 0; i < newConnections.length; i++) {
      let beliefCounter = 0;
      let interestCounter = 0;
      if (newConnections[i].gender !== currentUser.user.gender) {
        beliefCounter += 1;
      }
      if (
        newConnections[i].sexual_orientation !==
        currentUser.user.sexual_orientation
      ) {
        beliefCounter += 1;
      }
      if (newConnections[i].race !== currentUser.user.race) {
        beliefCounter += 1;
      }
      if (newConnections[i].religion !== currentUser.user.religion) {
        beliefCounter += 1;
      }
      if (newConnections[i].pro_choice !== currentUser.user.pro_choice) {
        beliefCounter += 1;
      }
      if (
        newConnections[i].political_party !== currentUser.user.political_party
      ) {
        beliefCounter += 1;
      }
      if (newConnections[i].fav_sport === currentUser.user.fav_sport) {
        interestCounter += 1;
      }
      if (newConnections[i].fav_cuisine === currentUser.user.fav_cuisine) {
        interestCounter += 1;
      }
      if (
        newConnections[i].fav_book_genre === currentUser.user.fav_book_genre
      ) {
        interestCounter += 1;
      }
      if (newConnections[i].fav_city === currentUser.user.fav_city) {
        interestCounter += 1;
      }
      if (
        newConnections[i].fav_movie_genre === currentUser.user.fav_movie_genre
      ) {
        interestCounter += 1;
      }
      console.log(beliefCounter);
      console.log(interestCounter);
      if (beliefCounter >= 3 && interestCounter >= 3) {
        collectedArray.push(newConnections[i]);
      }
    }
    console.log(collectedArray);
    setMatchedUser(collectedArray[0]);
  };

  function setUserChatting(user1, user2) {

    let matches = [...user1.previous_matches, user2.username]
    console.log(matches)
    console.log(user2)
    console.log(user1)

    fetch(`http://localhost:3001/users/${user1.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...user1, is_chatting: true, previous_matches: matches }),
    })
      .then(response => response.json())
      .then((data) => {
        console.log(data)
      })
  };

  console.log(matchedUser)

  function helpTest() {
    // setTimeout(() => {
    if (matchedUser) {
      // /PATCH /user/:id (one for each user)
      setUserChatting(currentUser.user, matchedUser)
      setUserChatting(matchedUser, currentUser.user)
      // push matchedUser into previousMatched array
      // helpermethod()
      history.push("/chat");
    } else {
      return alert("Sorry no matches for you")
    }
  }


  const handleClick = () => {
    matchMaker();
    console.log(matchedUser)
    helpTest()
    // setTimeout(() => {
    //   if (matchedUser) {
    //     // /PATCH /user/:id (one for each user)
    //     setUserChatting(currentUser.user, matchedUser)
    //     setUserChatting(matchedUser, currentUser.user)
    //     // push matchedUser into previousMatched array
    //     // helpermethod()
    //     history.push("/chat");
    //   } else {
    //     // return "Nobody matched with you loser"
    //     return alert("Sorry no matches for you")
    //   }
    // }, 3000)
  };

  return (
    <div>
      <h1 class='question' align='center'>{currentUser.user.username}</h1>
      <button class='submit' align='center' onClick={handleClick}>Get Match</button>
    </div>
  );
};

export default Profile;
