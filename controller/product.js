const fs = require("fs");
const model = require("../model/product");
const { error, log } = require("console");
const { default: mongoose } = require("mongoose");
const Product = model.Product;

//MVC model-view-controller

exports.createProduct = async (req, res) => {
  // const product = new Product();
  // product.title='IPhoneX';
  // product.price=9999;
  // product.rating=5;
  // await product.save()

  const product = new Product(req.body);
  product
    .save()
    .then((savedModel) => {
      res.status(201).json(savedModel);
    })
    .catch((error) => {
      res.status(201).json(error);
      console.log(error)
    });
  
  // product.save((err, doc)=>{
  //   console.log({err, doc})
  //   res.status(201).json(doc)
  // })

  // product.save((err, doc)=>{
  //   if(err) return console.log(err)
  //   console.log(doc)
  // })

};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find()
  // console.log(products)
  res.json(products)
};

exports.getProduct = async (req, res) => {
  const id = req.params.id;
  console.log(id)
  const product = await Product.findById(id)
  // const prod = products.find((p) => p.id === id);
  res.json(product)
};

exports.replaceProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Product.findOneAndReplace({_id:id},req.body, {new: true})
    res.status(201).json(doc);
  } catch (error) {
    console.log(error)
    res.status(400).json(doc);
  }
};
exports.updateProduct = async (req, res) => {
  const id = req.params.id
  try{
    const doc = await Product.findOneAndUpdate({_id:id},req.body,{new:true})
    res.status(201).json(doc)
  }catch(err){
    res.status(400).json(err)
    console.log(err)
  }
};
exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  console.log(id)
  try{
    const doc = await Product.findOneAndDelete({_id:id},{new:true})
    res.status(201).json(doc);
  }catch(err){
    res.status(400)
    console.log(err)
  }
  res.status(201).json();
};
