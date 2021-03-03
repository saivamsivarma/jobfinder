import "./App.css";
import Landing from "./Pages/Landing/Landing";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from "./Pages/Users/Auth"

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/user" exact component={Auth}/>
        </Switch>
      </Router>
  );
}

export default App;