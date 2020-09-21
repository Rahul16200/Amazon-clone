import axios from "axios";
import {PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL,PRODUCT_DETAIL_REQUEST,PRODUCT_DETAIL_SUCCESS,PRODUCT_DETAIL_FAIL,PRODUCT_SAVE_REQUEST,PRODUCT_SAVE_SUCCESS,PRODUCT_SAVE_FAIL} from "../constants/productConstants.js";
 const listProducts = (searchKeyword="") => async (dispatch) =>{

try{
  dispatch({type:PRODUCT_LIST_REQUEST});
  const response = await axios.get('/api/products?searchKeyword=' +
        searchKeyword);
   dispatch({ type:PRODUCT_LIST_SUCCESS,
    payload:response.data
})
}
catch(error){
  dispatch({type:PRODUCT_LIST_FAIL,
  payload:error.message});

}

};


const saveProduct = (product) => async(dispatch,getState)=>{
  try{
  dispatch({type:PRODUCT_SAVE_REQUEST,payload:product})
  const{userSignin:{userInfo}} = getState();
  const data = axios.post("/api/products",product,{
    headers:{
    "Authorization" : "Bearer" + userInfo.token
  }})
  dispatch({type:PRODUCT_SAVE_SUCCESS,payload:data})
}
catch(error){
  dispatch({type:PRODUCT_SAVE_FAIL,payload:error.message})
}
}


const detailProduct = (productId) => async (dispatch)=>{
try{
  dispatch({type:PRODUCT_DETAIL_REQUEST,payload:productId});
  const info = await axios.get("/api/products/" + productId);
  dispatch({type:PRODUCT_DETAIL_SUCCESS, payload:info.data});
}
catch(error){
  dispatch({type:PRODUCT_DETAIL_FAIL,payload:error.message});
}
}

export {listProducts,detailProduct,saveProduct}
