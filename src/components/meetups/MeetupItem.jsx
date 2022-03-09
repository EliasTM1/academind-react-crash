import React, { useContext } from "react";
// * Syles.
import classes from "./MeetupItem.module.css";
// * Components
import Card from "../ui/Card";
import FavotiteContext from "../../store/Favorite-context";

// ? To wrap our components around more JSX and show that
// ? wrapped content, we need to access an special prop
// ? that is already comes by defauls.
// ? children

const MeetupItem = (props) => {
  //  ? Connect wuith the create context we previously created => createContext
  const favoriteCtx = useContext(FavotiteContext);
  //  ? This will retur a boolean that depending on its value
  //  ? we will be able to if exists on the favorite list
  //  ? or if it should be removed ==> boolean
  const itemsIsFavorite = favoriteCtx.itemIsFavorite(props.id);
  const handleAddRemoveFavorite = () => {
    if (itemsIsFavorite) {
      favoriteCtx.removeFavortie(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  };
  return (
    <Card>
      {/* {console.log(props, "from props")} */}
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt="" />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={handleAddRemoveFavorite}>
            {itemsIsFavorite ? "Remove from favorites" : "Add To Favorites"}
          </button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;
