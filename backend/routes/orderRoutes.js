// const express = require("express");
// const nodemailer = require("nodemailer");
// const Order = require("../models/Order");

// const router = express.Router();

// // ✅ Créer une commande
// router.post("/", async (req, res) => {
//   try {
//     const { name, phone, email, address, items } = req.body;

//     if (!name || !phone || !address || !items || !items.length) {
//       return res.status(400).json({ message: "Champs manquants" });
//     }

//     // ✅ Calcul automatique du total
//     const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

//     const newOrder = new Order({ name, phone, email, address, items, total });
//     await newOrder.save();

//     // Transporteur Nodemailer
//     const transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_HOST,
//       port: Number(process.env.EMAIL_PORT),
//       secure: true, // SSL si port 465
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });

//     // ✅ Construction email
//     const itemsHtml = items
//       .map(
//         (it) =>
//           `<li>${it.name} — ${it.qty} x ${it.price} $ = ${
//             it.qty * it.price
//           } $ </li>`
//       )
//       .join("");

//     await transporter.sendMail({
//       from: `"E-commerce" <${process.env.EMAIL_USER}>`,
//       to: process.env.RECEIVER_EMAIL,
//       subject: "🛒 Nouvelle commande (Paiement à la livraison)",
//       html: `
//         <h2>Nouvelle commande</h2>
//         <p><b>Nom:</b> ${name}</p>
//         <p><b>Téléphone:</b> ${phone}</p>
//         <p><b>Email:</b> ${email || "-"}</p>
//         <p><b>Adresse:</b> ${address}</p>
//         <p><b>Total:</b> ${total} MAD </p>
//         <h3>Articles:</h3>
//         <ul>${itemsHtml}</ul>
//       `,
//     });

//     res.json({ message: "Commande créée et envoyée par email ✅", order: newOrder });
//   } catch (err) {
//     console.error("Erreur envoi email:", err);
//     res.status(500).json({ message: "Erreur lors de l'envoi de l'email" });
//   }
// });

// // ✅ Liste des commandes
// router.get("/", async (req, res) => {
//   try {
//     const orders = await Order.find().sort({ createdAt: -1 });
//     res.json(orders);
//   } catch (err) {
//     res.status(500).json({ message: "Erreur serveur" });
//   }
// });

// // ✅ Détail d'une commande
// router.get("/:id", async (req, res) => {
//   try {
//     const order = await Order.findById(req.params.id);
//     if (!order) return res.status(404).json({ message: "Commande introuvable" });
//     res.json(order);
//   } catch (err) {
//     res.status(400).json({ message: "ID invalide" });
//   }
// });

// module.exports = router;

const express = require("express");
const nodemailer = require("nodemailer");
const Order = require("../models/Order");

const router = express.Router();

// ✅ Créer une commande
router.post("/", async (req, res) => {
  try {
    const { name, phone, email, address, items } = req.body;

    // Vérification des champs obligatoires
    if (!name || !phone || !address || !items || !items.length) {
      return res.status(400).json({ message: "Champs manquants" });
    }

    // ✅ Calcul automatique du total
    const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

    const newOrder = new Order({ name, phone, email, address, items, total });
    await newOrder.save();

    // ✅ Transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // SSL si port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Formatage des prix en MAD
    const formatPrice = (amount) =>
      new Intl.NumberFormat("fr-MA", {
        style: "currency",
        currency: "MAD",
      }).format(amount);

    // ✅ Construction HTML des articles
    const itemsHtml = items
      .map(
        (it) =>
          `<li>${it.name} — ${it.qty} x ${formatPrice(it.price)} = <b>${formatPrice(
            it.qty * it.price
          )}</b></li>`
      )
      .join("");

    // ✅ Envoi de l'email avec détails
    await transporter.sendMail({
      from: `"E-commerce" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "🛒 Nouvelle commande (Paiement à la livraison)",
      html: `
        <h2>Nouvelle commande</h2>
        <p><b>Nom :</b> ${name}</p>
        <p><b>Téléphone :</b> ${phone}</p>
        <p><b>Email :</b> ${email || "-"}</p>
        <p><b>Adresse :</b> ${address}</p>
        <p><b>Total :</b> ${formatPrice(total)}</p>
        <h3>Articles :</h3>
        <ul>${itemsHtml}</ul>
        <p style="margin-top:15px"><b>Méthode de paiement :</b> Paiement à la livraison 💵</p>
      `,
    });

    res.json({ message: "Commande créée et envoyée par email ✅", order: newOrder });
  } catch (err) {
    console.error("Erreur envoi email:", err);
    res.status(500).json({ message: "Erreur lors de l'envoi de l'email" });
  }
});

// ✅ Liste des commandes
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// ✅ Détail d'une commande
router.get("/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Commande introuvable" });
    res.json(order);
  } catch (err) {
    res.status(400).json({ message: "ID invalide" });
  }
});

module.exports = router;



