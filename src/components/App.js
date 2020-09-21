import React from "react";
import "../styles.css";
import Header from "./Header.jsx";
import { BrowserRouter, Route } from "react-router-dom";
import ProductScreen from "./ProductScreen.jsx";
import Main from "./Main.jsx";
import CartScreen from  "./CartScreen";
import SigninScreen from "./SigninScreen";
import RegisterScreen from "./RegisterScreen";
import ProductsScreen from "./ProductsScreen";
import ShippingScreen from "./ShippingScreen";
import PaymentScreen from "./PaymentScreen";
import PlaceOrderScreen from "./PlaceOrderScreen";
function App() {
  return (
    <BrowserRouter>
      <div className="APP">
        <Header />
        <Route path ="/products" component={ProductsScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/signin" component = {SigninScreen} />
        <Route path="/shipping" component={ShippingScreen} />
        <Route path ="/payment" component={PaymentScreen} />
        <Route path ="/placeorder" component={PlaceOrderScreen} />
        <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/" exact={true} component={Main} />

      </div>
    </BrowserRouter>
  );
}
export default App;
