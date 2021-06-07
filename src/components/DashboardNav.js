import React from "react";
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function DashboardNav() {
    return (
        <nav class="navbar navbar-light bg-danger">
      <span class="navbar-brand mb-0 h1">FaceFood</span>
      <ul class="nav justify-content-end">
        <li class="nav-item">
           <a class="nav-link" href="/">Home</a>
        </li>
        <li class="nav-item">
           <NavLink to="/orders"><a class="nav-link" style={{textDecoration: "none"}}>Orders</a></NavLink>
        </li>
        <li class="nav-item">
           <NavLink to="/add"><a class="nav-link" style={{textDecoration: "none"}}>Add Items</a></NavLink>
        </li>
        <li class="nav-item">
           <NavLink to="/delete"><a class="nav-link" style={{textDecoration: "none"}}>Delete Items</a></NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/contact"><a class="nav-link" style={{textDecoration: "none"}}>Contact Us</a></NavLink>
        </li>
        <li class="nav-item">
        <NavLink to="/logout"><a class="nav-link" style={{textDecoration: "none"}}>LogOut</a></NavLink>
        </li>
      </ul>
    </nav>
    );
}

export default DashboardNav;