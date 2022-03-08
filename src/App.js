import React from "react";
// * Routing
import { Route, Routes } from "react-router-dom";
// * Pages
import Allmeetups from "./pages/Allmeetups";
import Favorites from "./pages/Favorites";
import NewMeetUps from "./pages/NewMeetUps";
// * Components
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Allmeetups />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/new-meet" element={<NewMeetUps />} />
      </Routes>
    </Layout>
  );
}

export default App;
