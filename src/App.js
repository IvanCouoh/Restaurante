import React, { useEffect } from "react";
import Home from './pages/Home';
import Menu from "./pages/Menu";
import Details from './pages/DishDetail';
import ViewOrder from './pages/Order';
import AddDish from './pages/AddDish';
import Admin from './pages/IndexAdmin';
import Test from './pages/Test';
import GestionPlatillos from './pages/MenuAdmin';
import AddCategory from './pages/AddCategory';
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
        <Route path="/nueva-categoria" component={AddCategory} />
        <Route path="/gestion-platillos" component={GestionPlatillos} />
        <Route path="/test" component={Test}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Route path="/nuevo-platillo" component={AddDish}></Route>
        <Route path="/menu" component={Menu}></Route>
        <Route path="/detalle" component={Details}></Route>
        <Route path="/mi-orden" component={ViewOrder}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;