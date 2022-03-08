import { Route ,Routes } from "react-router-dom";
// * Pages 
import Allmeetups from "./pages/Allmeetups";
import Favorites from "./pages/Favorites";
import NewMeetUps from "./pages/NewMeetUps";
// * Components
import MainNavigation from "./components/layout/MainNavigation";


function App() {
  return (
    <div>
      <MainNavigation/>
      <Routes>
        <Route path="/" element={<Allmeetups/>}/>
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/new-meet" element={<NewMeetUps/>}/>

        
      </Routes>
    </div>
  );
}

export default App;
