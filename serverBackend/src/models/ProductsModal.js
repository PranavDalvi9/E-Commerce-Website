const mongoose = require("mongoose");

const EcommerceProductsSchema = new mongoose.Schema(
  {
    title: { type: String, require: true }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const EcommerceProducts = mongoose.model("E-CommerceWebsite", EcommerceProductsSchema);
module.exports = EcommerceProducts;