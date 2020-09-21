import React,{useEffect,useState} from "react";
import data from "../data.js";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {useSelector,useDispatch} from "react-redux";
import {detailProduct} from "../actions/productActions";

function ProductScreen(props) {
  // console.log(props.match.params.id);
  // const product = data.find(x => x._id === props.match.params.id);
  const productDetails= useSelector(state => state.productDetail);
  const {product,loading,error} = productDetails;
  const [qty,setQty]= useState(1);
  const dispatch =useDispatch();
useEffect(()=>{
dispatch(detailProduct(props.match.params.id))
},[]);
const handleToCart =() =>{
  props.history.push("/cart/" + props.match.params.id + "?qtty=" +qty)
}
  return (
    <div>
      <div className="back-to-result">
        <Link to="/">Back to results </Link>
      </div>
      {loading?
           <div> ..loading </div> :
         error ?
       <div> error </div>:
      <div className="details">
        <div>
          <img className="details-image" src={product.image} alt="product" />
        </div>
        <div className="details-info">
          <ul>
            <li>
              <h> {product.Name} </h>
            </li>
            <li>
              <h>
                {" "}
                {product.Rating} stars ({product.NumReviews} Reviews){" "}
              </h>
            </li>
            <li>
              <b> Price:{product.price} </b>
            </li>
            <li>
              <h> Description:{product.Description} </h>
            </li>
          </ul>
        </div>

        <div className="details-action">
          <ul>
            <li>Price: {product.price}</li>
            <li>Status:{product.countInStock >0? "In Stock":"Unavailable"}</li>
            <li>
              Qty:
              <select value={qty} onChange={(e) =>{setQty(e.target.value)}}>
              {[...Array (product.countInStock).keys()].map(x=>
              <option value={x+1}>{x+1}</option>
            )}

              </select>
            </li>
            <li>

            {product.countInStock >0 &&  <Button onClick={handleToCart} variant="warning" block>
                Add to Cart
              </Button> }
            </li>
          </ul>
        </div>
      </div>
    }
    </div>
  );
}


export default ProductScreen;
