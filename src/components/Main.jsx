import React,{useEffect,useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import {listProducts} from "../actions/productActions";
import axios from "axios";
import Button from "react-bootstrap/Button";
function Main(props) {


const productList = useSelector(state => state.productList);
const[searchKeyword,setSearchKeyword] = useState("")
const {products,loading,error} = productList;

const dispatch = useDispatch();

useEffect(() => {
  dispatch(listProducts());

}, [])


const submitHandler = (e) => {
   e.preventDefault();
   dispatch(listProducts(searchKeyword));
 };


  return(




   loading ? <div> ..loading </div> :
    error ? <div> error </div>:
    <div>
<div>
<form className="search-form" onSubmit={submitHandler}>
           <input className="search-input"
             name="searchKeyword"
             onChange={(e) => setSearchKeyword(e.target.value)}
           />
           <Button type="submit" variant="light">Search</Button>
         </form>
         </div>

    <div>
      <ul className="data">
        {products.map(product => (


          <li key={product._id}>

            <div className="product">
              <Link to={"/product/" + product._id}>
                <img
                  className="prod-image"
                  src={product.image}
                  alt={product.name}
                />
              </Link>
              <div className="prod-name">
                <Link to={"/product/" + product._id}>{product.name} </Link>
              </div>
              <div className="prod-price">{product.price}</div>
              <div className="prod-Brand">{product.brand}</div>
              <div className="prod-Rating">
                {product.rating} stars ({product.NumReviews} reviews)
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>


  );
}
export default Main;
