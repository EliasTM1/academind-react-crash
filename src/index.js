import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//  * Router
import { BrowserRouter } from "react-router-dom";
//  * Provide context
import { FavoriteContextProvider } from "./store/Favorite-context";

ReactDOM.render(
  <FavoriteContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavoriteContextProvider>,
  document.getElementById("root")
);
