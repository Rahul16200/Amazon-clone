import react from "react";
import React,{useEffect,useState} from "react";
import data from "../data.js";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {useSelector,useDispatch} from "react-redux";
import {saveProduct,listProducts} from "../actions/productActions"





function ProductsScreen(props) {
const [modalVisible,setModalVisible] = useState(false)
const [image,setImage] = useState("");
const [price,setPrice] =useState("");
const[name,setName]=useState("");
const[rating,setRating]=useState("");
const[description,setDescription]=useState("");
const[numreviews,setNumReviews]=useState("");
const[countInStock,setCountInStock]=useState("");
const[category,setCategory]=useState("");
const[brand,setBrand]=useState("");


const productList = useSelector(state => state.productList);
const {products,loading,error} = productList;
const productSave = useSelector(state=>state.productSave);
const { loading:loadingSave,success:successSave,error:errorSave}= productSave

const dispatch =useDispatch();
useEffect(()=>{
  dispatch(listProducts());
return () => {
      //
    };
},[]);

const openModal = ()=>{
setModalVisible(true)
// setName(product.name)
// setNumReviews(product.numreviews)
// setCountInStock(product.countInStock)
// setPrice(product.price)
// setBrand(product.brand)
// setRating(product.rating)
// setCategory(product.category)
// setDescription(product.description)

}

const submitHandler = (e) =>{
e.preventDefault();
dispatch(saveProduct({name,image,price,numreviews,countInStock,brand,category,description,rating}))
  // props.history.push("/");
}


  return (

    <div>
    <div>
    <h3> Products </h3>
    <button onClick={()=>openModal({})}> create Product </button></div>

{modalVisible &&

      <div className="form">

      <form onSubmit={submitHandler} >
      <ul className="form-container">
     //  <li>
     // Create Product
     //  </li>
      <li>
      {loadingSave && <div> ..loading </div>}
      {errorSave && <div> error </div> }
      </li>
      <li>
      <button onClick={()=>setModalVisible(false)}> Go Back </button>
</li>
      <li>
      <label for ="name">
      name
      </label>
      <input type="name" name="name" id="name"  onChange={(e) => setName(e.target.value)}>
      </input>
      </li>
      <li>
      <label for ="image">
      image
      </label>
      <input type="text" name="image" id="image"  onChange={(e) => setImage(e.target.value)}>
      </input>
      </li>
      <li>
      <label for ="price">
      price
      </label>
      <input type="price" name="price" id="price" onChange={(e)=>setPrice(e.target.value)}>
      </input>
      </li>
      <li>
      <label for ="category">
      category
      </label>
      <input type="category" name="category" id="category" onChange={(e)=>setCategory(e.target.value)}>
      </input>
      </li>
      <li>
      <label for ="numreviews">
      numreviews
      </label>
      <input type="numreviews" name="numreviews" id="numreviews" onChange={(e)=>setNumReviews(e.target.value)}>
      </input>
      </li>
      <li>
      <label for ="rating">
      Rating
      </label>
      <input type="rating" name="rating" id="rating" onChange={(e)=>setRating(e.target.value)}>
      </input>
      </li>
      <li>
      <label for ="countInStock">
      countInStock
      </label>
      <input type="countInStock" name="countInStock" id="countInStock" onChange={(e)=>setCountInStock(e.target.value)}>
      </input>
      </li>
      <li>
      <label for ="brand">
      brand
      </label>
      <input type="brand" name="brand" id="brand" onChange={(e)=>setBrand(e.target.value)}>
      </input>
      </li>
      <li>
      <label for ="description">
        Description
      </label>
      <textarea type="description" name="description" id="description" onChange={(e)=>setDescription(e.target.value)}>
      </textarea>
      </li>
      <li>
      <button onClick={submitHandler}> Create  </button>
</li>


  </ul>
  </form>
  </div>


}



<div>
<table>
<thead>
<tbody>
<tr>
<th>ID</th>
<th> name </th>
<th>price</th>
<th>category </th>
<th>brand </th>
<th> action </th>
</tr>
</tbody>
</thead>
<tbody>
{products.map(product=>(<tr>
<td> {product._id} </td>
<td> {product.name} </td>
<td> {product.price} </td>
<td> {product.category} </td>
<td> {product.brand} </td>
<td>
<button> edit </button>
<button> delete </button>
</td>
</tr>
))}
</tbody>
</table>
</div>
</div>

  );
}


export default ProductsScreen;
