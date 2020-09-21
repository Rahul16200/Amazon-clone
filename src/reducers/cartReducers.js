import {ADD_TO_CART,REMOVE_FROM_CART,CART_SAVE_SHIPPING,CART_SAVE_PAYMENT} from "../constants/cartConstants.js";



function cartReducer (state={cartItems:[],shipping:{},payment:{}},action){
  switch(action.type){
    case ADD_TO_CART:
const item = action.payload;
const product = state.cartItems.find(x=>x.id===item.id);
if(product){
  return{ cartItems:
    state.cartItems.map(x=>x.id === item.id ? item :x)
}
}

  return {cartItems: [...state.cartItems,item]};

case REMOVE_FROM_CART:
return { cartItems:state.cartItems.filter(x =>x.id !== action.payload)}

case CART_SAVE_SHIPPING:
return{...state,shipping:action.payload}


case CART_SAVE_PAYMENT:
return{...state,payment:action.payload}


    default:
    return state;
  }

}

export default cartReducer;
