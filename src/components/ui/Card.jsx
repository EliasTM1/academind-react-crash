import React from "react";
import classes from "./Card.module.css";

// ? To wrap our components around more JSX and show that 
// ? wrapped content, we need to access an special prop
// ? that is already comes by defauls. 
// ? children

const Card = (props) => {
  return (
  <div className={classes.card}>{props.children}</div>
  )
};

export default Card;
