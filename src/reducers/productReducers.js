import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL,PRODUCT_DETAIL_REQUEST,PRODUCT_DETAIL_SUCCESS,PRODUCT_DETAIL_FAIL,PRODUCT_SAVE_REQUEST,PRODUCT_SAVE_SUCCESS,PRODUCT_SAVE_FAIL} from "../constants/productConstants.js"

function productListReducer(state={products:[] },action){
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
    return {loading:true,products:[]};
    case PRODUCT_LIST_SUCCESS:
    return {loading:false,products:action.payload};
    case PRODUCT_LIST_FAIL:
    return{loading:false,error:action.payload}
    default:
    return state;
  }
}

function productDetailReducer(state={product:{} },action){
  switch (action.type){
    case PRODUCT_DETAIL_REQUEST :
    return {loading:true};
    case PRODUCT_DETAIL_SUCCESS:
    return {loading:false,product:action.payload};
    case PRODUCT_DETAIL_FAIL:
    return{loading:false,error:action.payload}
    default:
  return state;
  }
}

function productSaveReducer(state={product:{} },action){
  switch (action.type){
    case PRODUCT_DETAIL_REQUEST :
    return {loading:true};
    case PRODUCT_DETAIL_SUCCESS:
    return {loading:false,success:true,product:action.payload};
    case PRODUCT_DETAIL_FAIL:
    return{loading:false,error:action.payload}
    default:
  return state;
  }
}


export  {productListReducer,productDetailReducer,productSaveReducer};
