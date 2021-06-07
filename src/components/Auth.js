import React,{Component} from "react";
import { Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from "@testing-library/react";


export default class Auth extends Component {
      constructor(props) {
        super(props)
        const token = localStorage.getItem("token")

      let loggedIn = true
      if (token == null){
        loggedIn = false
      }

        this.state = {
          username: "",
          password: "",
          loggedIn
        }

        this.onChange = this.onChange.bind(this)
        this.submitForm = this.submitForm.bind(this)

      }

      onChange(e) {
        this.setState({
          [e.target.name]: e.target.value
        })
      }

      submitForm(e) {
        e.preventDefault()
        const{username,password} = this.state

        if(username === "facefood@gmail.com" && password === "facefood12"){
          localStorage.setItem("token","asdfghjkloiuytrdfcvb")
          this.setState({
            loggedIn: true
          })
        }
      }

      render() {
        if(this.state.loggedIn){
          return <Redirect to="/" />
        }
    return(
      <div className="row">
          <div className="col">
            <h3>New Here?</h3>
            <p>Then Sign Up and Start Ordering!</p>
            <button type="submit" className="btn btn-danger">SIGN UP</button>
          </div>
          <div className="col">
            <form onSubmit={this.submitForm}>
  <div className="form-group">
    <h1>Sign in</h1>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="username" value={this.state.username} onChange={this.onChange}/>
  </div>
  <div className="form-group">
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
  </div>
  <input type="submit" />
  <p><a href="#">Forgot Password?</a></p>
</form>
        </div>
      </div>
      
    )
 }
}
