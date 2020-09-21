import react from "react";
import React,{useEffect,useState} from "react";
import data from "../data.js";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {useSelector,useDispatch} from "react-redux";
import {saveShipping} from "../actions/cartActions";
import CheckoutSteps from "./CheckoutSteps"





function RegisterScreen(props) {

const [address,setAddress] = useState("");
const [city,setCity] =useState("");
const [postalcode,setPostalCode] = useState("");
const [country,setCountry] = useState("");
  const dispatch =useDispatch();


const submitHandler = (e) =>{
e.preventDefault();
dispatch(saveShipping({address,city,postalcode,country}))
props.history.push("payment")

}


  return ( <div>
    <CheckoutSteps step1 step2> </CheckoutSteps>

    <div className="form">

    <form onSubmit={submitHandler} >
    <ul className="form-container">
    <li className="register-head">
    Shipping
    </li>

    <li>
    <label for ="address">
    address
    </label>
    <input type="text" name="address" id="address"  onChange={(e) => setAddress(e.target.value)}>
    </input>
    </li>
    <li>
    <label for ="City">
  City
    </label>
    <input type="text" name="city" id="city"  onChange={(e) => setCity(e.target.value)}>
    </input>
    </li>
    <li>
    <label for ="postal code">
    Postal code
    </label>
    <input type="text" name="postal code" id="postal code"  onChange={(e) => setPostalCode(e.target.value)}>
    </input>
    </li>
    <li>
    <label for ="country">
    Country
    </label>
    <input type="text" name="country" id="country"  onChange={(e) => setCountry(e.target.value)}>
    </input>
    </li>

<li>    <Button  className= "signin-button" size="lg"variant="warning" block type="submit" className="">Continue </Button>
    </li>


</ul>
</form>

    </div>
    </div>
  );
}


export default RegisterScreen;
