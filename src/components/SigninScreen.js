import react from "react";
import React,{useEffect,useState} from "react";
import data from "../data.js";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {useSelector,useDispatch} from "react-redux";
import CheckoutSteps from "./CheckoutSteps"
import {signin} from "../actions/userActions";





function SigninScreen(props) {

const [email,setEmail] = useState("");
const [password,setPassword] =useState("");
const[name,setName]=useState("");
const userSignin = useSelector(state=>state.userSignin);
const {loading,userInfo,error}= userSignin;
const redirect = props.location.search?props.location.search.split("=")[1]:"/"
const dispatch =useDispatch();
useEffect(()=>{
if(userInfo){
  props.history.push(redirect);
}
return () => {
      //
    };
},[userInfo]);

const submitHandler = (e) =>{
e.preventDefault();
dispatch(signin(email,password))
}


  return (
    <div>
    <CheckoutSteps step1> </CheckoutSteps  >

    <div className="form">

    <form onSubmit={submitHandler} >
    <ul className="form-container">
    <li className="signIn-heading">
    Sign-In
    </li>
    <li>
    {loading && <div> ..loading </div>}
    {error && <div> {error} </div> }
    </li>
    <li>
    <label for ="email">
    Email
    </label>
    <input type="email" name="email" id="email"  onChange={(e) => setEmail(e.target.value)}>
    </input>
    </li>

    <li>
    <label for ="password">
    password
    </label>
    <input className="pass" type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)}>
    </input>
    </li>
    <li>
    <Button className= "signin-button" size="lg"variant="warning" block type="submit" className="">signIn </Button>
    </li>
    <li className="acc-end">
    New to Amazona

    <Link className = "register-link" to ={ redirect === "/"? "register" : "register?redirect" +redirect}>Create your  amazona Account  </Link>
    </li>

</ul>
</form>

    </div>
    </div>
  );
}


export default SigninScreen;
