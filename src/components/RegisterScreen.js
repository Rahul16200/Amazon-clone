import react from "react";
import React,{useEffect,useState} from "react";
import data from "../data.js";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {useSelector,useDispatch} from "react-redux";

import {register} from "../actions/userActions";





function RegisterScreen(props) {

const [name,setName] = useState("");
const [repassword,setrePassword] =useState("");
const [password,setPassword] = useState("");
const [email,setEmail] = useState("");
const userRegister= useSelector(state=>state.userRegister);
const {loading,userInfo,error}= userRegister;
  const dispatch =useDispatch();
useEffect(()=>{
if(userInfo){
  props.history.push("/");
}
return () => {
      //
    };
},[userInfo]);

const submitHandler = (e) =>{
e.preventDefault();
dispatch(register(name,email,password))

}


  return (

    <div className="form">

    <form onSubmit={submitHandler} >
    <ul className="form-container">
    <li className="register-head">
    Create your Account
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
    <label for ="name">
    Name
    </label>
    <input type="name" name="name" id="name"  onChange={(e) => setName(e.target.value)}>
    </input>
    </li>
    <li>
    <label for ="password">
    Password
    </label>
    <input type="password" name="password" id="password"  onChange={(e) => setPassword(e.target.value)}>
    </input>
    </li>
    <li>
    <label for ="rePassword">
    Repassword
    </label>
    <input className="pass" type="Password" name="rePassword" id="rePassword" onChange={(e)=>setrePassword(e.target.value)}>
    </input>
    </li>
    <li>
    <Button  className= "signin-button" size="lg"variant="warning" block type="submit" className="">Create </Button>
    </li>
    <li className="acc-end">
    Already Have an Account
    </li>
    <li>
    <Link className="signin-link" to ="/signin"> Sign-In </Link>
    </li>

</ul>
</form>

    </div>
  );
}


export default RegisterScreen;
