import axios from "axios";
import cookie from "js-cookie";
import {ADD_TO_CART,REMOVE_FROM_CART,CART_SAVE_SHIPPING,CART_SAVE_PAYMENT} from "../constants/cartConstants.js";

 const addTocart = (productId,qty) => async(dispatch,getState) =>{
try{
  const rs = await axios.get("/api/products/" + productId);
  dispatch({type:ADD_TO_CART,
    payload:{
      id:rs.data._id,
      image:rs.data.image,
      name:rs.data.name,
      price:rs.data.price,
      brand:rs.data.brand,
      countInStock:rs.data.countInStock,
      qty
    }

  })
  const{cart:{cartItems}} = getState();
  cookie.set ("cartItems",JSON.stringify(cartItems));

}
catch(error){

}

}


const removeFromCart =(productId) => (dispatch,getState) =>{
  dispatch({type:REMOVE_FROM_CART,
  payload:productId
})
const{cart:{cartItems}} = getState();
cookie.set ("cartItems",JSON.stringify(cartItems));

}

const saveShipping = (data) => (dispatch) =>{
  dispatch({type:CART_SAVE_SHIPPING,
  payload:data})
}

const savePayment= (data) => (dispatch) =>{
  dispatch({type:CART_SAVE_PAYMENT,
  payload:data})
}

export {addTocart,removeFromCart,saveShipping,savePayment}
