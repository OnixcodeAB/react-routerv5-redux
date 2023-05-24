import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";
import Notfound from "../containers/Notfound";
import Layout from "../containers/Layout";
import { Provider } from "react-redux";
import store from "../store";

const App = () => (
  <BrowserRouter>
    <Provider store={store}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route component={Notfound} />
        </Switch>
      </Layout>
    </Provider>
  </BrowserRouter>
);

export default App;
