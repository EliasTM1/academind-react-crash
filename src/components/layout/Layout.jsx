/* eslint-disable react/prop-types */
// * React
import React from "react";
// * Styles
import classes from "./Layout.module.css";
// * Components
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </>
  );
};

export default Layout;
