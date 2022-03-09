import React, { useContext } from "react";
// * router
import { Link } from "react-router-dom";
// * Styles
import classes from "./MainNavigation.module.css";
//  * Conecting context
import FavotiteContext from "../../store/Favorite-context";

const MainNavigation = () => {
  const favoriteCtx = useContext(FavotiteContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <ul>
              <Link to="/">All meetups</Link>
            </ul>
          </li>
          <li>
            <ul>
              <Link to="/new-meet">Add new meet up</Link>
            </ul>
          </li>
          <li>
            <ul>
              <Link to="/favorites">
                Favorite {favoriteCtx.totalFavorites >= 1 ? "♥️" : "💩"}
              </Link>
              <span className={classes.badge}>
                {favoriteCtx.totalFavorites}
              </span>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
