
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connexion MongoDB
// mongoose.connect(
//   "mongodb+srv://montassirchehboun:RajaCasablanca49*@cluster0.e0ybsld.mongodb.net/ecommerce?retryWrites=true&w=majority",
//   { useNewUrlParser: true, useUnifiedTopology: true }
// )
// .then(() => console.log("✅ MongoDB connecté avec succès"))
// .catch(err => console.error("❌ Erreur MongoDB:", err));

// // Routes
// const orderRoutes = require("./routes/orderRoutes");
// app.use("/api/orders", orderRoutes);

// // Route test
// app.get("/", (req, res) => {
//   res.send("Serveur e-commerce en marche 🚀");
// });

// // Lancer serveur
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));


const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connexion MongoDB
mongoose.connect(
  process.env.MONGO_URI || "mongodb+srv://montassirchehboun:RajaCasablanca49*@cluster0.e0ybsld.mongodb.net/ecommerce?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log("✅ MongoDB connecté avec succès"))
.catch(err => console.error("❌ Erreur MongoDB:", err));

// Import des routes
const orderRoutes = require("./routes/orderRoutes");
const productRoutes = require("./routes/productRoutes");

// Utilisation des routes
app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);

// Route test
app.get("/", (req, res) => {
  res.send("Serveur e-commerce en marche 🚀");
});

// Lancer serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur http://localhost:${PORT}`));
