import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";

const Profile = ({ currentUser, setMatchedUser }) => {
  const [matchArray, setMatchArray] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:3001/users`)
      .then((resp) => resp.json())
      .then((users) => {
        console.log(users)
        const filteredUsers = users.filter((user) => {
          return user.is_chatting === false;
        });
        console.log(filteredUsers);
        setAllUsers(filteredUsers);
      });
  }, []);

  console.log(allUsers)
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

  const handleClick = () => {
    matchMaker();
    history.push("/chat");
  };

  return (
    <div>
      <h1>{currentUser.user.username}</h1>
      <button onClick={handleClick}>Get Match</button>
    </div>
  );
};

export default Profile;
