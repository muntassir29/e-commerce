const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Route test
app.get("/", (req, res) => {
  res.send("Serveur e-commerce en marche 🚀");
});

// Lancer le serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});