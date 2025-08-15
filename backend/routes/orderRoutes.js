const express = require("express");
const nodemailer = require("nodemailer");
const Order = require("../models/Order");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { name, phone, email, address, items, total } = req.body;

    if (!name || !phone || !address || !items || !items.length)
      return res.status(400).json({ message: "Champs manquants" });

    // Sauvegarde en MongoDB
    const newOrder = new Order({ name, phone, email, address, items, total });
    await newOrder.save();

    // Création du transporteur Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true, // SSL pour port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Construction du contenu email
    const itemsHtml = items.map(it =>
      `<li>${it.name} — ${it.qty} x ${it.price} MAD = ${it.qty * it.price} MAD</li>`
    ).join("");

    await transporter.sendMail({
      from: `"E-commerce" <${process.env.EMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: "🛒 Nouvelle commande (Paiement à la livraison)",
      html: `
        <h2>Nouvelle commande</h2>
        <p><b>Nom:</b> ${name}</p>
        <p><b>Téléphone:</b> ${phone}</p>
        <p><b>Email:</b> ${email || "-"}</p>
        <p><b>Adresse:</b> ${address}</p>
        <p><b>Total:</b> ${total || "-"} MAD</p>
        <h3>Articles:</h3>
        <ul>${itemsHtml}</ul>
      `
    });

    res.json({ message: "Commande envoyée par email ✅" });

  } catch (err) {
    console.error("Erreur envoi email:", err);
    res.status(500).json({ message: "Erreur lors de l'envoi de l'email" });
  }
});

module.exports = router;

