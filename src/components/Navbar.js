import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
    return(
        <nav class="navbar navbar-light bg-danger">
      <span class="navbar-brand mb-0 h1">FaceFood</span>
      <ul class="nav justify-content-end">
        <li class="nav-item">
           <a class="nav-link" href="#">Home</a>
        </li>
        <li class="nav-item">
           <a class="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
    );
}

export default Navbar;