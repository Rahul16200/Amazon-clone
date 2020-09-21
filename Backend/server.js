import express from "express";
import data from "./data";
import config from "./config";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/userRoute";
import productRoute from "./routes/productRoute";
import bodyParser from "body-parser";
const app= express();
app.use(bodyParser.json());

dotenv.config();
const mongodburl = "mongodb+srv://rahulramachandran:Sairam123@cluster0-gx4vd.mongodb.net/amazo-app?retryWrites=true&w=majority"
mongoose.connect(mongodburl,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useCreateIndex:true
}) .catch(error =>console.log(error.message))

app.use("/api/users", userRoute)
app.use("/api/products",productRoute)


// app.get("/api/products",function(req,res){
//   res.send(data);
// });
// app.get("/api/products/:id",function(req,res){
//   const productId = req.params.id;
//   const product = data.find(x =>x._id === productId);
//   if(product)
//   res.send(product);
//   else {
//     res.status(404).send({msg:"product not found"})
//   }
// });
//


app.listen(5000,function(){
  console.log("server started at http://localhost:5000");
});
