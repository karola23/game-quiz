import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles/themes/default/theme.scss";
import components from "./components";
import pages from "./pages";
import { MyStats } from "./context";
import { QuestionsProvider } from "./context";

// import hoks
require("./hoc");

const App = () => {
  const { Background, Logo } = components;
  const { Category, Intro, Quiz, Result } = pages;
  const { setCategory } = useContext(MyStats);

  useEffect(() => {
    if (localStorage.getItem("category") === null)
      localStorage.setItem("category", "programming");

    setCategory(localStorage.getItem("category"));
  }, [setCategory]);

  return (
    <Background>
      <Router>
        <Logo />
        <Switch>
          <Route exact path="/" component={Intro} />
          <Route path="/category" component={Category} />
          <Route path="/quiz">
            <QuestionsProvider>
              <Quiz />
            </QuestionsProvider>
          </Route>
          <Route path="/result" component={Result} />
        </Switch>
      </Router>
    </Background>
  );
};

export default App;
