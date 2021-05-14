import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./snippets/Home";
import Login from "./snippets/Login";
import AddOrder from "./snippets/AddOrder";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/Login" />
        </Route>
        <Route path="/Login" component={Login} />
        <Route path="/Home" component={Home} />
        <Route path="/AddOrder" component={AddOrder} />
      </Switch>
    </>
  );
}

export default App;
