import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './App.css';

import ModuleView from './Screens/ModuleView.js'
import View from "./Screens/View.js";
import Home from "./Screens/Home.js";

function AppRoutes() {

    return (
    <Router>
        <Switch>
        <Route exact path="/view">
            <View />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/moduleview">
              <ModuleView />
            </Route>
        </Switch>
</Router>
    
  );
}

export default AppRoutes;

function ModuleViews() {
  return(
  <div>
    aaaa
  </div>
  )
}
