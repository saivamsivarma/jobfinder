import "./App.css";

import Landing from "./Pages/Landing/Landing";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from "./Pages/Users/Auth/Auth";
import Dashboard from "./Pages/Users/Dashboard";
import Findjobs from "./Pages/Users/Findjobs";
import Profile from "./Pages/Users/Profile";
import Settings from "./Pages/Users/Settings";
import Createprofile from "./Pages/Users/Create";

import Companiesauth from "./Pages/Companies/Auth/Auth";
import Companycreate from "./Pages/Companies/Create";
import Companydashboard from "./Pages/Companies/Dashboard";
import Jobs from "./Pages/Companies/Jobs";
import Users from "./Pages/Companies/Users";
import Createjob from "./Pages/Companies/Createjob";

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
          <Route path="/createprofile" exact component={Createprofile}/>

          <Route path="/companiesauth" exact component={Companiesauth}/>
          <Route path="/company-create" exact component={Companycreate}/>
          <Route path="/dashboard-company" exact component={Companydashboard}/>
          <Route path="/jobs" exact component={Jobs}/>
          <Route path="/users" exact component={Users}/>
          <Route path="/create_job" exact component={Createjob}/>
        </Switch>
      </Router>
  );
}

export default App;