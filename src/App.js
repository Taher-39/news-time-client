import './App.css';
import Home from './components/Home/Home/Home';
import Admin from './components/Admin/AddNews/AddNews';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PoliticsNewsDetails from './components/Home/PoliticsNews/PoliticsNewsDetails';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
        <Route path="/details-news/:_id">
            <PoliticsNewsDetails></PoliticsNewsDetails>
        </Route> 
          <Route path="/">
            <Home />
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
