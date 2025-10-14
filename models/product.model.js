const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter productn name"],
    },

    quantity: {
      type: Number,
      required: true,
      default: 0,
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    image: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true, // its gonna created and updated it and allow to create more.
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
