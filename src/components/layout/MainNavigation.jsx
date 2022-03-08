import React from "react";
// * router
import {Link} from "react-router-dom";
// * Styles 
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
return( 
    <header className={classes.header}> 
        <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <ul>
                            <Link to='/'>All meetups</Link>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <Link to='/new-meet'>Add new meet up</Link>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <Link to='/favorites'>My favorites</Link>
                        </ul>
                    </li>
                </ul>
            </nav>
        
    </header>
)
};

export default MainNavigation;
