import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import './App.css';
import Menu from './components/menu';
import Todo from './containers/todo';
import About from './containers/about';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/">
            <Todo />
          </Route>
          <Redirect from="*" to="/todo"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
