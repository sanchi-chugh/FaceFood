import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import {Route,Switch} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Auth from "./components/Auth";
import Home from "./components/Home";
import Error from "./components/Error";
import LayoutNav from './components/LayoutNav';
import LayoutDashboardNav from './components/LayoutDashboardNav';
import DynamicLayoutRoute from './components/DynamicLayoutRoute';
import Orders from './components/Orders';
import Add_Items from './components/Add_Items';
import Delete_Items from './components/Delete_Items';
import Contact from './components/Contact';
import Logout from "./components/Logout";


function App() {
  return (
    <div className="App">
     
      <Switch>
      <DynamicLayoutRoute exact path="/" component={Home} layout="DASH_BOARD_NAV"/>
      <DynamicLayoutRoute exact path="/auth" component={Auth} layout="NAV"/>
      <DynamicLayoutRoute exact path="/orders" component={Orders} layout="DASH_BOARD_NAV"/>
      <DynamicLayoutRoute exact path="/add" component={Add_Items} layout="DASH_BOARD_NAV"/>
      <DynamicLayoutRoute exact path="/delete" component={Delete_Items} layout="DASH_BOARD_NAV"/>
      <DynamicLayoutRoute exact path="/contact" component={Contact} layout="DASH_BOARD_NAV"/>
      <DynamicLayoutRoute exact path="/logout" component={Logout} />
      <Route component={Error} />
      </Switch>
      


    </div>
  );
}

export default App ;
