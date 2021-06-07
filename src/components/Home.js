import React, {Component} from "react";
import { Link,Redirect } from "react-router-dom";
import Card from "./Cards";
import Sdata from "./Sdata";
import pasta from "../images/pasta.jpg";
import noodles from "../images/noodles.jpeg";
import pizza from "../images/pizza.webp";



export default class Home extends Component {
    constructor(props){
      super(props)
      const token = localStorage.getItem("token")

      let loggedIn = true
      if (token == null){
        loggedIn = false
      }

      this.state = {
        loggedIn
      }

    }
    render(){
      if(this.state.loggedIn === false){
        return <Redirect to="/auth" />
      }
    return(
        <>
        <nav class="navbar navbar-light bg-light">
  <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</nav>
<div className="row">
  <div className="col">
      <Card imgsrc={Sdata[0].imgsrc} 
            name={Sdata[0].name} 
            price={Sdata[0].price} 
            alt={Sdata[0].alt}/>
   </div>
   <div className="col">
   <Card imgsrc={Sdata[1].imgsrc} 
            name={Sdata[1].name} 
            price={Sdata[1].price} 
            alt={Sdata[1].alt}/>
   </div>
   <div className="col">
   <Card imgsrc={Sdata[2].imgsrc} 
            name={Sdata[2].name} 
            price={Sdata[2].price} 
            alt={Sdata[2].alt}/>
   </div>
</div>
  
  
</>
    )
  }
}

