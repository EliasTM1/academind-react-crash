// * Core
import React, { useState, useEffect } from "react";
// * Components
import MeetupList from "../components/meetups/MeetupList";
// *

const Allmeetups = () => {
  // ? Register new state
  // ? isLoading is the snapshot of the latest state
  // ? setIsLoading is a method that allow us to modify the statr
  // ? the first value that we pass to use state is the initail value of the state

  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://academind-crash-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const m = {
            id: key,
            ...data[key],
          };
          meetups.push(m);
          console.warn(m);
        }
        console.log(meetups);
        //  ? set is loading to false
        //  ? Change the state
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading....</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
};

export default Allmeetups;
