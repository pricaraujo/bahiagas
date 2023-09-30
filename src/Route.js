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
import ViewSupplier from "./Screens/Viewsupplier";
import ViewOtimization from './Screens/ViewOtimization'

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
            <Route exact path="/view/supplier">
              <ViewSupplier/>
            </Route>
            <Route exact path="/view/otimization">
              <ViewOtimization/>
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
