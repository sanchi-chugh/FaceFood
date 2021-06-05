import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import {Route,Switch} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import Home from "./components/Home";
import Error from "./components/Error";
import LayoutNav from './components/LayoutNav';
import LayoutDashboardNav from './components/LayoutDashboardNav';
import DynamicLayoutRoute from './components/DynamicLayoutRoute';



function App() {
  return (
    <div className="App">
     
      <Switch>
      <DynamicLayoutRoute exact path="/" component={Home} layout="DASH_BOARD_NAV" />
      <DynamicLayoutRoute exact path="/signin" component={Signin} layout="NAV" />
      <DynamicLayoutRoute component={Error} />
      </Switch>
      


    </div>
  );
}

export default App ;
