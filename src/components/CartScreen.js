import React, {useEffect,useState} from "react";
import {addTocart,removeFromCart} from "../actions/cartActions";
import {useDispatch,useSelector} from "react-redux";
import data from "../data.js";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function CartScreen(props) {

  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const productId = props.match.params.id

  const cart = useSelector(state => state.cart);
  const {cartItems} = cart
  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addTocart(productId, qty));

    }
  }, []);

const removeHandler = ()=>{
    dispatch(removeFromCart(productId));
    console.log("button is clicked")
}
const checkOutHandler =() =>{
   props.history.push("/signin?redirect=shipping")
}

  return (
<div className="cart">
<div className="cart-list">
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

Qty

<select  value={item.qty} onChange={(e) => dispatch(addTocart(item.id,e.target.value))}>
{[...Array (item.countInStock).keys()].map(x=>
<option value={x+1}>{x+1}</option>
)}

</select>


<Button className="Delete-button" variant="light"onClick={()=>removeHandler(item.id)}> Delete </Button>
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
<div className="cart-action">
<div className="cart-bill">
<h>
SubTotal ({cartItems.reduce((a,c) => a + c.qty,0)} items)
:
$  {cartItems.reduce((a,c) => a+ c.price * c.qty,0)}
</h>
</div>
<Button onClick={checkOutHandler} className="button-cart" variant="warning" block  disabled={cartItems.length===0}>
Proceed To Checkout
</Button>
</div>

</div>
  )
}


export default CartScreen;
