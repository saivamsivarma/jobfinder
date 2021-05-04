import React from "react";
import "./App.css";

import Landing from "./Pages/Landing/Landing";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from "./Pages/Users/Auth/Auth";
import Createprofile from "./Pages/Users/Create";
import User from "./Pages/Users/User";

import Companiesauth from "./Pages/Companies/Auth/Auth";
import Companycreate from "./Pages/Companies/Create";
import Company from "./Pages/Companies/Company"

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/user-page" component={User} />
          <Route path="/auth" exact component={Auth}/>
          <Route path="/createprofile" exact component={Createprofile}/>

          <Route path="/companiesauth" exact component={Companiesauth}/>
          <Route path="/company-create" exact component={Companycreate}/>
          <Route path="/company" component={Company} />
        </Switch>
      </Router>
  );
}

export default App;