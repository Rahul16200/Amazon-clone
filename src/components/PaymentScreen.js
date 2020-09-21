import data from "../data.js";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {useSelector,useDispatch} from "react-redux";
import {savePayment} from "../actions/cartActions";
import CheckoutSteps from "./CheckoutSteps"
import React,{useState} from "react";





function PaymentScreen(props) {

const [paymentMethod,setPaymentMethod] = useState("");

  const dispatch =useDispatch();


const submitHandler = (e) =>{
e.preventDefault();
dispatch(savePayment({paymentMethod}))
props.history.push("placeorder")
}


  return ( <div>
    <CheckoutSteps step1 step2 step3> </CheckoutSteps>

    <div className="form">

    <form onSubmit={submitHandler} >
    <ul className="form-container">
    <li className="register-head">
Payment
    </li>

    <li >
    <label className="payment-label"for ="payment">
Paypal
    </label>
    <input className="payment-radio" type="radio" name="paymentMethod" id="paymentMethod"  onChange={(e) => setPaymentMethod(e.target.value)}>
    </input>
    </li>



<li>
<Button  className= "payment-button" size="lg"variant="warning" block type="submit" className="">Continue </Button>
    </li>


</ul>
</form>

    </div>
    </div>
  );
}


export default PaymentScreen;
