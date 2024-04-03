const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const { Schema } = mongoose;
const path = require('path')
const server = express();
const fs = require("fs");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");
require("dotenv").config()
// mongoose connnect

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("connected to database");
}

server.use(cors())
server.use(express.json());
server.use(morgan("dev"));
server.use(express.static(path.resolve(__dirname+"/dist")));
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);
server.use('*',(req,res)=>{
  res.sendFile(path.resolve(__dirname, 'dist','index.html'))
})


server.listen(8080, () => {
  console.log("server started");
});


