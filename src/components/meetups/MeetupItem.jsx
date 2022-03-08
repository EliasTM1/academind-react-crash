import React from "react";
// * Syles.
import classes from "./MeetupItem.module.css";
// * Components
import Card from "../ui/Card";

// ? To wrap our components around more JSX and show that
// ? wrapped content, we need to access an special prop
// ? that is already comes by defauls.
// ? children

const MeetupItem = (props) => {
  return (
    <Card>
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
          <button>To Favs</button>
        </div>
      </li>
    </Card>
  );
};

export default MeetupItem;
