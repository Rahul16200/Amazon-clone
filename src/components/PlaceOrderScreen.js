import React, {useEffect,useState} from "react";
import {addTocart} from "../actions/cartActions";
import {useDispatch,useSelector} from "react-redux";
import data from "../data.js";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import CheckoutSteps from "./CheckoutSteps"

function PlaceOrderScreen(props) {

  const productId = props.match.params.id
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;

  const cart = useSelector(state => state.cart);
  const {cartItems,shipping,payment} = cart
  if(!cart.shipping.address){
    props.history.push("shipping")
  }
  else if(!payment.paymentMethod){
    props.history.push("payment")
  }
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addTocart(productId, qty));

    }
  }, []);


const itemsPrice = cartItems.reduce((a,c)=> a +c.price *c.qty,0);
const shippingPrice = itemsPrice >100 ? 0: 10;
const taxPrice = 0.15 + itemsPrice;
const totalPrice = itemsPrice + shippingPrice + taxPrice;






const placeOrderHandler =() =>{
  // create order
}
const checkOutHandler =() =>{
   props.history.push("/signin?redirect=shipping")
}

  return (
    <div>
    <CheckoutSteps step1 step2 step3 step4> </CheckoutSteps>
<div className="place-order">
<div className="place-order-info">

<div>
 <h className="shipping-head">ShippingScreen
</h>
 <div className="shipping-info">
 {cart.shipping.address},{cart.shipping.city},
 {cart.shipping.postalcode},{cart.shipping.country}
 </div>
 </div>
 <div className="payment-head">
 <h> Payment
</h>
 <div className="payment-info">
 Payment Method:
 {cart.payment.paymentMethod}
 </div>
  </div>

 <div>
<ul className="cart-list-container">
<li>
<h className="cart-heading"> Shopping cart </h>

<div className="cart-price"> Price </div>
</li>

{
  cartItems.length === 0 ?
  <div> <h className="empty-cart"> Cart Is Empty </h> </div>
  :
  cartItems.map(item=>
    <li>

  <div>


  <img className="cart-img" src={item.image} alt="product" />
</div>

  <div className="cart-name">
                    <div>
                      <Link to={"/product/" + item.id}>
                        {item.name}
                      </Link>

                    </div>
<div className="cart-qty">
Qty:{item.qty}



</div>
</div>

<div className="cart-price-value">
{item.price}

   </div>
   </li>

 )
}
</ul>
</div>
</div>
<div className="placeorder-action">
<ul>
<li>
  <Button className="PlaceOrder-button" onClick={placeOrderHandler} size="lg"variant="warning" block  >Place Order</Button>
</li>
<li>
  <h3 className="order-summary" >Order Summary</h3>
</li>
<li>
<div>Items</div>
<div>${itemsPrice}</div>
</li>
<li>
<div>Shipping </div>
<div>${shippingPrice}</div>
</li>
<li>
<div>Tax</div>
<div>${taxPrice}</div>
</li>
<li>
<div>Order Total </div>
<div>${totalPrice}</div>
</li>
</ul>
</div>


</div>
</div>

  )
}


export default PlaceOrderScreen;
