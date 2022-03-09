//  * Core
import React from "react";
import { createContext, useState } from "react";

// * use context is an object but eventyally
// * it will return an component, that is why
// * we need to name it with a capital letter
const FavotiteContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavortie: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

//  * This component will be a regular component
//  * is in charge of informing the state
//  * to components that want to listen for this context

export const FavoriteContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  //    ? Helper functions
  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((previousState) => {
      return previousState.concat(favoriteMeetup);
    });
  };
  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((previousState) => {
      return previousState.filter((meet) => meet.id !== meetupId);
    });
  };
  const itemsFavoritehandler = (meetupId) => {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavortie: removeFavoriteHandler,
    itemIsFavorite: itemsFavoritehandler,
  };
  return (
    <>
      <FavotiteContext.Provider value={context}>
        {props.children}
      </FavotiteContext.Provider>
      ;
    </>
  );
};

export default FavotiteContext;
