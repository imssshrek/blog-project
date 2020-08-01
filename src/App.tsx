import React from "react";
import "./App.css";
import Nav from "./containers/Nav";
import Footer from "./containers/Footer";
import ArticlePage from "./containers/articles/ArticlePage";
import IndexPage from "./containers/index/IndexPage";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="App-body">
        <Route path="/articles" component={ArticlePage} />
        <Route path="/" component={IndexPage} exact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
