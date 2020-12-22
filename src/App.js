// import logo from './logo.svg';
// import Home from './Containers/home/HomePage';
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route></Route>
//       </Switch>
//     </Router>
//   );
// }

// export default App;


import React from "react";
import Home from './Containers/home/HomePage';
import Menu from "./pages/Menu";
import Carrito from './pages/Carrito';
import Uno from './pages/Uno';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        {/* <Redirect from="/" to="/"></Redirect> */}
        <Route path="/uno">
          <Uno />
        </Route>
        <Route path="/carrito">
          <Carrito />
        </Route>
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
