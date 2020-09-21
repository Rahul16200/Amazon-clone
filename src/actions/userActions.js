import  axios from "axios";
import cookie from "js-cookie";
import {USER_SIGNIN_REQUEST,USER_SIGNIN_SUCCESS,USER_SIGNIN_FAIL,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL,USER_REGISTER_REQUEST} from "../constants/userConstants.js";

const signin = (email,password)  => async (dispatch) =>{
  try{
  dispatch({type:USER_SIGNIN_REQUEST,payload:{email,password}});
const response=  await axios.post("/api/users/signin",{email,password})
  dispatch({type:USER_SIGNIN_SUCCESS,payload:response});
 cookie.set("userInfo",JSON.stringify(response));
    }
  catch(error){
    dispatch({type:USER_SIGNIN_FAIL,payload:error.message});
  }
}

const register = (name,email,password)  => async (dispatch) =>{
  try{
  dispatch({type:USER_REGISTER_REQUEST,payload:{name,email,password}});
const response=  await axios.post("/api/users/register",{name,email,password})
  dispatch({type:USER_REGISTER_SUCCESS,payload:response});
    }
  catch(error){
    dispatch({type:USER_REGISTER_FAIL,payload:error.message});
  }
}
export {signin,register}
