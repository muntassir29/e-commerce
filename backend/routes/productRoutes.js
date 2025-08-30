// const express = require("express");
// const router = express.Router();
// const Product = require ("../models/product");

// // GET /api/products -> liste
// router.get("/", async (req, res) => {
//   try {
//     const products = await Product.find().sort({ createdAt: -1 });
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ message: "Erreur serveur" });
//   }
// });

// // GET /api/products/:id -> détail
// router.get("/:id", async (req, res) => {
//   try {
//     const p = await Product.findById(req.params.id);
//     if (!p) return res.status(404).json({ message: "Produit introuvable" });
//     res.json(p);
//   } catch (err) {
//     res.status(400).json({ message: "ID invalide" });
//   }
// });

// // POST /api/products -> créer
// router.post("/", async (req, res) => {
//   try {
//     const { name, price, description, image } = req.body;
//     const p = await Product.create({ name, price, description, image });
//     res.status(201).json(p);
//   } catch (err) {
//     res.status(400).json({ message: "Erreur lors de la création" });
//   }
// });

// // PUT /api/products/:id -> modifier
// router.put("/:id", async (req, res) => {
//   try {
//     const p = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!p) return res.status(404).json({ message: "Produit introuvable" });
//     res.json(p);
//   } catch (err) {
//     res.status(400).json({ message: "Erreur lors de la mise à jour" });
//   }
// });

// // DELETE /api/products/:id -> supprimer
// router.delete("/:id", async (req, res) => {
//   try {
//     const p = await Product.findByIdAndDelete(req.params.id);
//     if (!p) return res.status(404).json({ message: "Produit introuvable" });
//     res.json({ message: "Produit supprimé" });
//   } catch (err) {
//     res.status(400).json({ message: "Erreur lors de la suppression" });
//   }
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// ✅ Liste produits
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// ✅ Détail produit
router.get("/:id", async (req, res) => {
  try {
    const p = await Product.findById(req.params.id);
    if (!p) return res.status(404).json({ message: "Produit introuvable" });
    res.json(p);
  } catch (err) {
    res.status(400).json({ message: "ID invalide" });
  }
});

// ✅ Ajouter produit
router.post("/", async (req, res) => {
  try {
    const { name, price, description, images } = req.body;
    const p = await Product.create({ name, price, description, images });
    res.status(201).json(p);
  } catch (err) {
    res.status(400).json({ message: "Erreur lors de la création" });
  }
});

// ✅ Modifier produit
router.put("/:id", async (req, res) => {
  try {
    const p = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!p) return res.status(404).json({ message: "Produit introuvable" });
    res.json(p);
  } catch (err) {
    res.status(400).json({ message: "Erreur lors de la mise à jour" });
  }
});

// ✅ Supprimer produit
router.delete("/:id", async (req, res) => {
  try {
    const p = await Product.findByIdAndDelete(req.params.id);
    if (!p) return res.status(404).json({ message: "Produit introuvable" });
    res.json({ message: "Produit supprimé" });
  } catch (err) {
    res.status(400).json({ message: "Erreur lors de la suppression" });
  }
});

module.exports = router;
