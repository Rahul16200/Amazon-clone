import {createStore,combineReducers,applyMiddleware,compose} from "redux"
import {productListReducer,productDetailReducer,productSaveReducer} from "./reducers/productReducers";
import thunk from "redux-thunk";
import cookie from "js-cookie";
import cartReducer from "./reducers/cartReducers";
import {userSigninReducer,userRegisterReducer} from "./reducers/userReducers";
const reducer = combineReducers({
  productList:productListReducer,
  productDetail:productDetailReducer,
  cart:cartReducer,
  userSignin:userSigninReducer,
  userRegister:userRegisterReducer,
  productSave:productSaveReducer

})

const cartItems = cookie.getJSON("cartItems") || [];
const userInfo = cookie.getJSON("userInfo") || null;

const initialState={cart:{cartItems,shipping:{},payment:{}},userSignin:{userInfo} };
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store=createStore(reducer,initialState,composeEnhancers(applyMiddleware(thunk)));

export default store;
