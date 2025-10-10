const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connexion DB
connectDB();

// Import routes
const orderRoutes = require("./routes/orderRoutes");
const productRoutes = require("./routes/productRoutes");

// Routes
app.use("/api/orders", orderRoutes);
app.use("/api/products", productRoutes);

// Route test
app.get("/", (req, res) => {
  res.send("🚀 Serveur e-commerce en marche");
});

// Lancer serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Serveur démarré sur http://localhost:${PORT}`));

