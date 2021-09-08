import './App.css';
import Home from './components/Home/Home/Home';
import Admin from './components/Admin/AddNews/AddNews';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PoliticsNewsDetails from './components/Home/PoliticsNews/PoliticsNewsDetails';
import InternationalNews from './components/Home/InternationalNews/InternationalNews';
import SportsNews from './components/Home/SportsNews/SportsNews';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Login from './components/Login/Login';
import AddAdmin from './components/Admin/AddAdmin/AddAdmin';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/international">
            <InternationalNews></InternationalNews>
          </PrivateRoute>
          <PrivateRoute path="/sports">
            <SportsNews></SportsNews>
          </PrivateRoute>
          <Route path="/details-news/:_id">
            <PoliticsNewsDetails></PoliticsNewsDetails>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider> 
  );
}

export default App;
