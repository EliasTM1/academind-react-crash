import React from "react";
//  * Components
import NewMeetupForm from "../components/meetups/NewMeetupForm";
//  *Router
import { useNavigate } from "react-router-dom";

// ? useHistory Hook
// ? This hook let us acces the history of the browser
// ? as well as other methods the enable out code to navigate

//  * In cae we want to chancge the default methos of a fetch request
//  * as a asecond argundment we need to pass an objcets specifying the method
//  * We ususally need to use the JSON.stringify to trasform the values
//  * and store them in the data-base

const NewMeetUps = () => {
  // ! CONSTANTS
  const history = useNavigate();
  const handleHttpRequest = (meetupData) => {
    fetch("https://academind-crash-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history("/");
    });
  };

  return (
    <section>
      <h1>New Meetup</h1>
      <NewMeetupForm onAddMeetUp={handleHttpRequest} />
    </section>
  );
};

export default NewMeetUps;
