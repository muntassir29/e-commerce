// const mongoose = require("mongoose");

// const orderSchema = new mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     phone: { type: String, required: true },
//     email: { type: String },
//     address: { type: String, required: true },
//     items: [
//       {
//         name: String,
//         price: Number,
//         qty: Number
//       }
//     ],
//     total: { type: Number }
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("Order", orderSchema);

const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String },
    address: { type: String, required: true },

    items: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        qty: { type: Number, required: true, min: 1 }, // ✅ obligatoire
      }
    ],

    total: { type: Number, required: true }, // ✅ calculé automatiquement
  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", orderSchema);

