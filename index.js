const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();
require ('dotenv').config();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});



// mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connected to database!");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("Connection failed!", error);
  });

  // .then(() => {
  //   console.log("Connected to database!");
  //   app.listen(3000, () => {
  //     console.log("Server is running on port 3000");
  //   });
  // })
  // .catch(() => {
  //   console.log("Connection failed!");
  // });
