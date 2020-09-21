import express from "express"
import Product from "../models/productModel";
import {
  getToken
} from '../util';

const router = express.Router();

router.get("/", async (req, res) => {
  const products = await Product.find({});
  res.send(products);

  const searchKeyword = req.query.searchKeyword
     ? {
         name: {
           $regex: req.query.searchKeyword,
           $options: 'i',
         },
       }
     : {};

})
router.get("/:id",async(req,res) =>{
  const product = await Product.findOne({_id:req.params.id})
  if(product){
    res.send(product)
  }
  else{
    res.status(404).send({msg:"product not found"});
  }
})

router.post("/",(req, res) => {
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    brand: req.body.brand,
    price: req.body.price,
    countInStock: req.body.countInStock,
    Description: req.body.Description,
    NumReviews: req.body.NumReviews,
    rating:req.body.rating,
    category :req.body.category
  })
  const newProduct = product.save();
  if(newProduct){
    res.status(201).send({msg:"New product created", data:newProduct})
    }
    else{
     res.status(401).send({msg:"error in creating product"})
   }
})


// Product.deleteOne({name:"Rahul"},function(err){
//   if(err){
//     console.log(err)
//   }
//   else{
//     console.log("deleted successfulyy");
//   }
// })
 export default router;
