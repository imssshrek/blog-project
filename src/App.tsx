import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Nav from "./containers/Nav";
import Footer from "./containers/Footer";
import ArticlePage from "./containers/articles/ArticlePage";
import IndexPage from "./containers/index/IndexPage";
import ErrorPage from "./containers/ErrorPage";
import AdminMenu from "./containers/admin/AdminMenu";
import AdminPage from "./containers/admin/AdminPage";

function App() {
  return (
    <>
      <div className="App">
        <Nav />
        <div className="App-body">
          <Switch>
            <Route path="/articles" component={ArticlePage} />
            <Route path="/adminwrite" component={AdminPage} />
            <Route path="/" component={IndexPage} exact />
            <Route component={ErrorPage} />
          </Switch>
        </div>
        <Footer />
        <AdminMenu />
      </div>
    </>
  );
}

export default App;
