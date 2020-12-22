import React, { useEffect } from "react";
import Home from './pages/Home';
import Menu from "./pages/ClientUser/Menu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route path="/menu">
          <Menu />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;