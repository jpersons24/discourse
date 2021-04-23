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
  // const [matchArray, setMatchArray] = useState([]);

  const history = useHistory();

  console.log("Current User", currentUser);

  if (currentUser.user.is_chatting && hasActiveChat === false) {
    setHasActiveChat(true);
  }

  useEffect(() => {
    fetch(`http://localhost:3001/users/${currentUser.user.id}`)
      .then((resp) => resp.json())
      .then((match) => setMatchedUser(match.user));
  }, []);

  // const filteredUsers = allUsers.filter((user) => {
  //   return user.is_chatting === false;
  // });

  // const newConnections = filteredUsers.filter(
  //   (user) => !currentUser.user.previous_matches.includes(user.username)
  // );

  // console.log(newConnections);

  // const matchMaker = () => {
  //   console.log(allUsers);
  //   // console.log(currentUser.user.previous_matches[0])

  //   if (currentUser.user.previous_matches.length > 0) {
  //     setMatchedUser({ username: currentUser.user.previous_matches[0] });
  //     return;
  //   }

  //   let collectedArray = [];
  //   let finalDifferences = [];
  //   let finalInterests = [];

  //   for (let i = 0; i < newConnections.length; i++) {
  //     let differencesArray = [];
  //     let interestsArray = [];

  //     let beliefCounter = 0;
  //     let interestCounter = 0;

  //     if (newConnections[i].gender !== currentUser.user.gender) {
  //       beliefCounter += 1;
  //       differencesArray.push("gender");
  //     }
  //     if (
  //       newConnections[i].sexual_orientation !==
  //       currentUser.user.sexual_orientation
  //     ) {
  //       beliefCounter += 1;
  //       differencesArray.push("sexual orientation");
  //     }
  //     if (newConnections[i].race !== currentUser.user.race) {
  //       beliefCounter += 1;
  //       differencesArray.push("race");
  //     }
  //     if (newConnections[i].religion !== currentUser.user.religion) {
  //       beliefCounter += 1;
  //       differencesArray.push("religion");
  //     }
  //     if (newConnections[i].pro_choice !== currentUser.user.pro_choice) {
  //       beliefCounter += 1;
  //       differencesArray.push("abortion");
  //     }
  //     if (
  //       newConnections[i].political_party !== currentUser.user.political_party
  //     ) {
  //       beliefCounter += 1;
  //       differencesArray.push("politics");
  //     }
  //     if (newConnections[i].fav_sport === currentUser.user.fav_sport) {
  //       interestCounter += 1;
  //       interestsArray.push("favorite sport");
  //     }
  //     if (newConnections[i].fav_cuisine === currentUser.user.fav_cuisine) {
  //       interestCounter += 1;
  //       interestsArray.push("favorite cuisine");
  //     }
  //     if (
  //       newConnections[i].fav_book_genre === currentUser.user.fav_book_genre
  //     ) {
  //       interestCounter += 1;
  //       interestsArray.push("favorite book genre");
  //     }
  //     if (newConnections[i].fav_city === currentUser.user.fav_city) {
  //       interestCounter += 1;
  //       interestsArray.push("favorite city");
  //     }
  //     if (
  //       newConnections[i].fav_movie_genre === currentUser.user.fav_movie_genre
  //     ) {
  //       interestCounter += 1;
  //       interestsArray.push("favorite movie genre");
  //     }
  //     if (beliefCounter >= 3 && interestCounter >= 3) {
  //       collectedArray.push(newConnections[i]);
  //       finalDifferences.push(differencesArray);
  //       finalInterests.push(interestsArray);
  //     }
  //   }

  //   fetch(`http://localhost:3001/users/${currentUser.user.id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       ...currentUser.user,
  //       differences: finalDifferences,
  //       interests: finalInterests,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log("Current user", data);
  //       // setCurrentUser(data)
  //     });

  //   fetch(`http://localhost:3001/users/${collectedArray[0].id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       ...collectedArray[0],
  //       differences: finalDifferences,
  //       interests: finalInterests,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMatchedUser(data.user);
  //       console.log("Patched Match", data);
  //     });

  //   console.log("Interests Array", finalInterests);
  //   console.log("Differences Array", finalDifferences);
  //   console.log("Collected Array", collectedArray);
  // };

  // console.log("All Users", allUsers, "matched user", matchedUser);

  // useEffect(() => {
  //   matchMaker();
  // }, []);
  // if allUsers > 0 and matchedUser is null -> run matchmaker
  // if (matchedUser === null && allUsers.length > 0) {
  //   // debugger
  //   matchMaker()
  // };

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
