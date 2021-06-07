import React,{Component} from "react";
import { Link } from "react-router-dom";

export default class Logout extends Component {
    constructor(props){
        super(props)
        localStorage.removeItem("token")
    }
    render(){
    return(
        <>
        <h1>succesfully logout</h1>
        <Link to="/auth">login again</Link>
        </>
    );
    }
}

