const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    address: { type: String, required: true },
    items: [
      {
        name: String,
        price: Number,
        qty: Number
      }
    ],
    total: { type: Number }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);
