import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";
import Notfound from "../containers/Notfound";
import Layout from "../containers/Layout";
import Player from "../containers/Player";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/player/:id" component={Player} />
        <Route component={Notfound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
