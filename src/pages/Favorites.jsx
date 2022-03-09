import React, { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavotiteContext from "../store/Favorite-context";

const Favorites = () => {
  const favoriteCtx = useContext(FavotiteContext);

  // * Helper variable
  // * This will check if we have items in the array
  // * in case we do not have any favorites in the context array
  // * we will show a message stating this.
  let content;

  if (favoriteCtx.favorites.length === 0) {
    content = "Shit, you got no favorite places";
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }

  return (
    <>
      <h1>Favorites</h1>
      {content}
    </>
  );
};

export default Favorites;
