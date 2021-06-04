import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ReactDOM from "react-dom";
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
          <div className="col">
            <h3>New Here?</h3>
            <p>Then Sign Up and Start Ordering!</p>
            <button type="submit" className="btn btn-danger">SIGN UP</button>
          </div>
          <div className="col">
            <form>
  <div className="form-group">
    <h1>Sign in</h1>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" autocomplete="false" />
  </div>
  <div className="form-group">
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <button type="submit" className="btn btn-danger">LOGIN</button>
  <p><a href="">Forgot Password?</a></p>
</form>
        </div>
      </div>
    </div>
  );
}

export default App ;