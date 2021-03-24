import "./App.css";
import Landing from "./Pages/Landing/Landing";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from "./Pages/Users/Auth/Auth";
import Dashboard from "./Pages/Users/Dashboard";
import Findjobs from "./Pages/Users/Findjobs";
import Profile from "./Pages/Users/Profile";
import Settings from "./Pages/Users/Settings";
import Createprofile from "./Pages/Users/Stepper/Create";
import Companiesauth from "./Pages/Companies/Auth/Auth";
import Companycreate from "./Pages/Companies/Create";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/auth" exact component={Auth}/>
          <Route path="/dashboard" exact component={Dashboard}/>
          <Route path="/findjobs" exact component={Findjobs}/>
          <Route path="/profile" exact component={Profile}/>
          <Route path="/settings" exact component={Settings}/>
          <Route path="/createproifle" exact component={Createprofile}/>

          <Route path="/companiesauth" exact component={Companiesauth}/>
          <Route path="/company-create" exact component={Companycreate}/>
        </Switch>
      </Router>
  );
}

export default App;